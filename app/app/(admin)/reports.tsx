import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../src/components/ui/Card';
import { LoadingScreen } from '../../src/components/ui/LoadingScreen';
import { ErrorState } from '../../src/components/ui/ErrorState';
import { ScreenHeader } from '../../src/components/ui/ScreenHeader';
import { Colors } from '../../src/constants/colors';
import { Layout } from '../../src/constants/layout';
import { useLayoutInsets } from '../../src/hooks/useLayoutInsets';
import { reportService } from '../../src/services/reportService';
import { ReportSummary, DriverPerformance } from '../../src/types/api.types';

type Range = 'today' | 'week' | 'month';

const RANGE_OPTIONS: { label: string; value: Range }[] = [
  { label: 'Today', value: 'today' },
  { label: 'This Week', value: 'week' },
  { label: 'This Month', value: 'month' },
];

export default function ReportsScreen() {
  const { scrollPaddingBottom } = useLayoutInsets();
  const [range, setRange] = useState<Range>('today');
  const [summary, setSummary] = useState<ReportSummary | null>(null);
  const [driverData, setDriverData] = useState<DriverPerformance[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async (r = range) => {
    setLoading(true);
    setError(null);
    try {
      const [s, d] = await Promise.all([
        reportService.getSummary(r),
        reportService.getDriverPerformance(r),
      ]);
      setSummary(s);
      setDriverData(d.drivers);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load reports');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  if (loading && !refreshing && !summary) return <LoadingScreen message="Loading reports..." />;
  if (error && !summary) return <ErrorState message={error} onRetry={() => loadData()} />;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Reports" subtitle="Performance & delivery stats" />

      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: scrollPaddingBottom }]}
      >
        {/* Range selector */}
        <View style={styles.rangeRow}>
          {RANGE_OPTIONS.map((opt) => (
            <TouchableOpacity
              key={opt.value}
              onPress={() => { setRange(opt.value); loadData(opt.value); }}
              style={[styles.rangeBtn, range === opt.value && styles.rangeBtnActive]}
            >
              <Text style={[styles.rangeText, range === opt.value && styles.rangeTextActive]}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Summary */}
        {summary && (
          <>
            <Text style={styles.sectionTitle}>Summary</Text>
            <View style={styles.statsGrid}>
              <StatBox label="Total" value={summary.total} color={Colors.primaryBlue} bg="#EFF6FF" />
              <StatBox label="Delivered" value={summary.delivered} color={Colors.successGreen} bg="#F0FDF4" />
              <StatBox label="Failed" value={summary.failed} color={Colors.errorRed} bg="#FEF2F2" />
              <StatBox label="Pending" value={summary.pending} color={Colors.warningAmber} bg="#FFFBEB" />
            </View>

            <Card style={styles.rateCard}>
              <View style={styles.rateRow}>
                <View style={styles.rateItem}>
                  <Text style={styles.rateValue}>{summary.successRate}%</Text>
                  <Text style={styles.rateLabel}>Success Rate</Text>
                  <View style={styles.rateBar}>
                    <View style={[styles.rateFill, { width: `${summary.successRate}%`, backgroundColor: Colors.successGreen }]} />
                  </View>
                </View>
                <View style={styles.rateDivider} />
                <View style={styles.rateItem}>
                  <Text style={[styles.rateValue, { color: Colors.errorRed }]}>{summary.failedRate}%</Text>
                  <Text style={styles.rateLabel}>Failed Rate</Text>
                  <View style={styles.rateBar}>
                    <View style={[styles.rateFill, { width: `${summary.failedRate}%`, backgroundColor: Colors.errorRed }]} />
                  </View>
                </View>
              </View>
            </Card>
          </>
        )}

        {/* Driver Performance */}
        <Text style={styles.sectionTitle}>Driver Performance</Text>
        {driverData.length === 0 ? (
          <Text style={styles.noData}>No driver data for this period.</Text>
        ) : (
          driverData.map((d) => (
            <Card key={d.driverId} style={styles.driverCard}>
              <View style={styles.driverHeader}>
                <View style={styles.driverAvatar}>
                  <Text style={styles.driverInitial}>{d.driverName.charAt(0)}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.driverName}>{d.driverName}</Text>
                  <Text style={styles.driverVehicle}>{d.vehicleType}</Text>
                </View>
                <View style={[styles.perfBadge, { backgroundColor: d.successRate >= 80 ? '#F0FDF4' : '#FEF2F2' }]}>
                  <Text style={[styles.perfRate, { color: d.successRate >= 80 ? Colors.successGreen : Colors.errorRed }]}>
                    {d.successRate}%
                  </Text>
                </View>
              </View>
              <View style={styles.driverStats}>
                <PerfStat label="Total" value={d.total} />
                <PerfStat label="Done" value={d.delivered} color={Colors.successGreen} />
                <PerfStat label="Failed" value={d.failed} color={Colors.errorRed} />
              </View>
            </Card>
          ))
        )}

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const StatBox = ({ label, value, color, bg }: { label: string; value: number; color: string; bg: string }) => (
  <View style={[styles.statBox, { backgroundColor: bg }]}>
    <Text style={[styles.statValue, { color }]}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const PerfStat = ({ label, value, color }: { label: string; value: number; color?: string }) => (
  <View style={styles.perfStat}>
    <Text style={[styles.perfValue, color ? { color } : {}]}>{value}</Text>
    <Text style={styles.perfLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scrollContent: {},
  rangeRow: {
    flexDirection: 'row',
    paddingHorizontal: Layout.contentPadding,
    gap: 10,
    marginBottom: 4,
  },
  rangeBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  rangeBtnActive: { backgroundColor: Colors.primaryNavy, borderColor: Colors.primaryNavy },
  rangeText: { fontSize: 13, color: Colors.textSecondary, fontWeight: '500' },
  rangeTextActive: { color: Colors.white },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primaryNavy,
    paddingHorizontal: Layout.screenPadding,
    marginTop: 24,
    marginBottom: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Layout.contentPadding,
    gap: 10,
  },
  statBox: {
    width: '47%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: { fontSize: 28, fontWeight: '700' },
  statLabel: { fontSize: 12, color: Colors.textSecondary, marginTop: 4 },
  rateCard: { marginHorizontal: Layout.contentPadding, marginTop: 10 },
  rateRow: { flexDirection: 'row', alignItems: 'center' },
  rateItem: { flex: 1 },
  rateDivider: { width: 1, height: 60, backgroundColor: Colors.border, marginHorizontal: 16 },
  rateValue: { fontSize: 24, fontWeight: '700', color: Colors.successGreen },
  rateLabel: { fontSize: 12, color: Colors.textSecondary, marginVertical: 4 },
  rateBar: { height: 6, backgroundColor: Colors.border, borderRadius: 3 },
  rateFill: { height: 6, borderRadius: 3, minWidth: 4 },
  driverCard: { marginHorizontal: Layout.contentPadding, marginBottom: 12 },
  driverHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  driverAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  driverInitial: { color: Colors.white, fontWeight: '700', fontSize: 16 },
  driverName: { fontSize: 14, fontWeight: '600', color: Colors.textPrimary },
  driverVehicle: { fontSize: 12, color: Colors.textSecondary },
  perfBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  perfRate: { fontSize: 13, fontWeight: '700' },
  driverStats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 12,
  },
  perfStat: { flex: 1, alignItems: 'center' },
  perfValue: { fontSize: 18, fontWeight: '700', color: Colors.textPrimary },
  perfLabel: { fontSize: 11, color: Colors.textSecondary, marginTop: 2 },
  noData: {
    textAlign: 'center',
    color: Colors.textSecondary,
    paddingVertical: 24,
    fontSize: 14,
  },
});

/**
 * Central model registry — import this file anywhere to ensure
 * all Mongoose models are registered before any populate() calls.
 */
import '@/models/User';
import '@/models/Client';
import '@/models/Service';
import '@/models/Project';
import '@/models/Task';
import '@/models/ProgressUpdate';
import '@/models/Lead';
import '@/models/Conversation';
import '@/models/AIReply';

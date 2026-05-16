import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import api from '../utils/api';

const PastorStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/stories')
      .then(({ data }) => {
        setStories(data.stories || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const getYoutubeThumbnail = (url) => {
    if (!url) {
      return '/images/default-story.jpg';
    }

    let videoId = '';

    // youtu.be links
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }

    // youtube watch links
    else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    }

    // youtube shorts
    else if (url.includes('/shorts/')) {
      videoId = url.split('/shorts/')[1]?.split('?')[0];
    }

    if (!videoId) {
      return '/images/default-story.jpg';
    }

    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <div>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Real Pastors. Real Stories. Real Impact.</h1>

          <p>
            Hear how churches across Cobb County are
            discovering the power of unity and
            collaboration.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container-sm text-center">
          <span className="section-label">
            Stories That Inspire
          </span>

          <h2 className="section-title">
            Stories That Inspire
          </h2>

          <div className="divider divider-center"></div>

          <p
            style={{
              color: 'var(--text-light)',
              lineHeight: 1.8
            }}
          >
            Every church has a story. Every pastor
            carries a burden. Every ministry faces
            challenges. But when churches connect and
            support one another, new opportunities begin
            to open. These stories represent pastors and
            churches discovering what&apos;s possible when
            unity moves beyond words and becomes action.
          </p>
        </div>
      </section>

      {/* STORIES */}
      {loading ? (
        <div className="spinner"></div>
      ) : stories.length === 0 ? (
        <section className="section">
          <div className="container text-center">
            <h3>No stories added yet.</h3>
          </div>
        </section>
      ) : (
        <section
          className="section bg-off-white"
          style={{ paddingTop: 0 }}
        >
          <div className="container">
            <div
              className="grid-2"
              style={{ marginBottom: '32px' }}
            >
              {stories.slice(0, 2).map((s, i) => (
                <div
                  key={s._id}
                  className="card"
                  style={{
                    overflow: 'hidden',
                    borderRadius: '22px'
                  }}
                >
                  <a
                    href={s.youtubeUrl || s.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="story-video-box"
                  >
                    <img
                      src={getYoutubeThumbnail(
                        s.youtubeUrl || s.videoUrl
                      )}
                      alt={s.title}
                      className="story-video-thumb"
                    />

                    <div className="story-video-overlay">
                      <div className="story-play-btn">
                        <FiPlay size={22} />
                      </div>
                    </div>

                    {i === 0 && (
                      <span
                        className="badge badge-gold"
                        style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px'
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </a>

                  <div className="card-body">
                    <h3
                      style={{
                        color: 'var(--navy)',
                        marginBottom: '8px'
                      }}
                    >
                      {s.title}
                    </h3>

                    <p
                      style={{
                        color: 'var(--text-light)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        marginBottom: '16px'
                      }}
                    >
                      {s.content}
                    </p>

                    <p
                      style={{
                        color: 'var(--gold)',
                        fontWeight: 600,
                        fontSize: '0.88rem'
                      }}
                    >
                      — {s.pastorName}
                      {s.churchName
                        ? `, ${s.churchName}`
                        : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid-2">
              {stories.slice(2, 10).map((s) => (
                <div
                  key={s._id}
                  className="card"
                  style={{
                    overflow: 'hidden',
                    borderRadius: '22px'
                  }}
                >
                  <a
                    href={s.youtubeUrl || s.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="story-video-box small-video"
                  >
                    <img
                      src={getYoutubeThumbnail(
                        s.youtubeUrl || s.videoUrl
                      )}
                      alt={s.title}
                      className="story-video-thumb"
                    />

                    <div className="story-video-overlay">
                      <div className="story-play-btn small">
                        <FiPlay size={18} />
                      </div>
                    </div>
                  </a>

                  <div className="card-body">
                    <h3
                      style={{
                        color: 'var(--navy)',
                        marginBottom: '8px'
                      }}
                    >
                      {s.title}
                    </h3>

                    <p
                      style={{
                        color: 'var(--text-light)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        marginBottom: '16px'
                      }}
                    >
                      {s.content}
                    </p>

                    <p
                      style={{
                        color: 'var(--gold)',
                        fontWeight: 600,
                        fontSize: '0.88rem'
                      }}
                    >
                      — {s.pastorName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section text-center">
        <div className="container-sm">
          <h2 className="section-title">
            Be Part of the Story
          </h2>

          <div className="divider divider-center"></div>

          <p
            className="section-subtitle"
            style={{ marginBottom: '32px' }}
          >
            Join the network and add your church&apos;s
            story to this growing movement of
            collaboration and impact.
          </p>

          <Link
            to="/request-access"
            className="btn btn-primary btn-lg"
          >
            Join the Network <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .story-video-box {
          position: relative;
          display: block;
          width: 100%;
          height: 300px;
          overflow: hidden;
          background: #0f172a;
        }

        .small-video {
          height: 240px;
        }

        .story-video-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: 0.4s ease;
        }

        .story-video-box:hover .story-video-thumb {
          transform: scale(1.06);
        }

        .story-video-overlay {
          position: absolute;
          inset: 0;

          background: rgba(0,0,0,0.35);

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-play-btn {
          width: 72px;
          height: 72px;
          border-radius: 50%;

          background: var(--gold);
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          transition: 0.3s ease;
        }

        .story-play-btn.small {
          width: 58px;
          height: 58px;
        }

        .story-video-box:hover .story-play-btn {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .story-video-box {
            height: 240px;
          }

          .small-video {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
};

export default PastorStories;
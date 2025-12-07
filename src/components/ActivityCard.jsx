import {
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Award,
  Users,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

const ActivityCard = ({ activity, isDark }) => {
  const getStatusConfig = (status) => {
    const configs = {
      not_started: {
        label: 'Not Started',
        color: 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400',
        icon: AlertCircle,
      },
      in_progress: {
        label: 'In Progress',
        color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400',
        icon: Clock,
      },
      completed: {
        label: 'Completed',
        color: 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400',
        icon: CheckCircle,
      },
      overdue: {
        label: 'Overdue',
        color: 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400',
        icon: AlertCircle,
      },
    };
    return configs[status];
  };

  const getTypeConfig = (type) => {
    const configs = {
      online_class: {
        label: 'Live Class',
        icon: Users,
        color: 'text-purple-600 dark:text-purple-400',
      },
      assignment: {
        label: 'Assignment',
        icon: FileText,
        color: 'text-orange-600 dark:text-orange-400',
      },
      quiz: {
        label: 'Quiz',
        icon: Award,
        color: 'text-indigo-600 dark:text-indigo-400',
      },
      discussion: {
        label: 'Discussion',
        icon: MessageSquare,
        color: 'text-teal-600 dark:text-teal-400',
      },
    };
    return configs[type];
  };

  const getActionButton = () => {
    if (
      activity.status === 'completed' &&
      activity.type === 'online_class' &&
      activity.recordingAvailable
    ) {
      return {
        label: 'Watch Recording',
        style:
          'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300',
      };
    }
    if (activity.status === 'completed') {
      return {
        label: 'Review',
        style:
          'bg-gray-200 text-black hover:bg-gray-600 dark:bg-gray-700 dark:text-gray-100',
      };
    }
    if (activity.status === 'in_progress') {
      return {
        label: 'Continue',
        style: 'bg-blue-600 text-white hover:bg-blue-700',
      };
    }
    if (activity.status === 'overdue') {
      return {
        label: 'Submit Now',
        style: 'bg-red-600 text-white hover:bg-red-700',
      };
    }
    return {
      label: 'Start',
      style: 'bg-indigo-600 text-white hover:bg-indigo-700',
    };
  };

  const statusConfig = getStatusConfig(activity.status);
  const typeConfig = getTypeConfig(activity.type);
  const StatusIcon = statusConfig.icon;
  const TypeIcon = typeConfig.icon;
  const actionBtn = getActionButton();

  return (
    <div
      className={`rounded-lg border overflow-hidden min-w-0 group transition-all duration-200 hover:shadow-md ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${typeConfig.color}`}
              >
                <TypeIcon className="w-3 h-3 flex-shrink-0" />
                <span className="break-words">{typeConfig.label}</span>
              </span>

              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${statusConfig.color}`}
              >
                <StatusIcon className="w-3 h-3 flex-shrink-0" />
                <span className="break-words">{statusConfig.label}</span>
              </span>
            </div>

            <h3
              className={`text-base sm:text-lg font-semibold mb-1 truncate group-hover:text-indigo-600 transition-colors ${
                isDark ? 'text-white group-hover:text-indigo-400' : 'text-gray-900'
              }`}
            >
              {activity.title}
            </h3>

            <p
              className={`text-sm break-words ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {activity.program}
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {activity.type === 'online_class' && (
            <>
              <div
                className={`flex items-center gap-2 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Users className="w-4 h-4 flex-shrink-0" />
                <span className="break-words">{activity.instructor}</span>
              </div>

              <div
                className={`flex items-center gap-4 text-sm flex-wrap ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <span className="flex items-center gap-1 break-words">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  {formatDate(activity.scheduledAt)}
                </span>

                <span className="flex items-center gap-1 break-words">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  {activity.duration} mins
                </span>

                <span className="break-words">{activity.participants} enrolled</span>
              </div>
            </>
          )}

          {activity.type === 'assignment' && (
            <>
              <div
                className={`flex items-center gap-4 text-sm flex-wrap ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <span className="flex items-center gap-1 break-words">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  Due {formatDate(activity.dueDate)}
                </span>

                <span className="flex items-center gap-1 break-words">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  {activity.totalPoints} points
                </span>
              </div>

              {activity.score !== null && (
                <div className="text-sm">
                  <span
                    className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Score: {activity.score}%
                  </span>
                </div>
              )}
            </>
          )}

          {activity.type === 'quiz' && (
            <>
              <div
                className={`flex items-center gap-4 text-sm flex-wrap ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <span className="flex items-center gap-1 break-words">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  Due {formatDate(activity.dueDate)}
                </span>

                <span className="flex items-center gap-1 break-words">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  {activity.duration} mins
                </span>

                <span className="break-words">{activity.totalQuestions} questions</span>
              </div>

              {activity.score !== null && (
                <div className="text-sm">
                  <span
                    className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Score: {activity.score}%
                  </span>

                  <span
                    className={`ml-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    ({activity.attempts}{' '}
                    {activity.attempts === 1 ? 'attempt' : 'attempts'})
                  </span>
                </div>
              )}
            </>
          )}

          {activity.type === 'discussion' && (
            <div
              className={`flex items-center gap-4 text-sm flex-wrap ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <span className="flex items-center gap-1 break-words">
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                {activity.posts} posts
              </span>

              <span className="flex items-center gap-1 break-words">
                <Users className="w-4 h-4 flex-shrink-0" />
                {activity.participants} participants
              </span>

              <span className="break-words">Active {formatDate(activity.lastActivity)}</span>
            </div>
          )}
        </div>

        <button
          className={`w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${actionBtn.style}`}
        >
          {actionBtn.label}
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;

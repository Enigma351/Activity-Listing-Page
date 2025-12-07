export const generateActivities = () => {
  const programs = [
    'AI & Machine Learning',
    'Cloud Computing',
    'Data Science',
    'Full Stack Development',
  ];
  const statuses = ['not_started', 'in_progress', 'completed', 'overdue'];
  const types = ['online_class', 'assignment', 'quiz', 'discussion'];

  const activities = [];

  for (let i = 1; i <= 24; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const program = programs[Math.floor(Math.random() * programs.length)];

    const baseActivity = {
      id: i,
      program: program,
      status: status,
      type: type,
      createdAt: new Date(
        2024,
        11,
        Math.floor(Math.random() * 20) + 1
      ).toISOString(),
    };

    if (type === 'online_class') {
      activities.push({
        ...baseActivity,
        title: `Week ${Math.ceil(i / 4)} - ${
          [
            'Introduction to Neural Networks',
            'Deep Learning Fundamentals',
            'AWS Architecture Basics',
            'React Advanced Patterns',
            'Database Design',
            'API Development',
          ][Math.floor(Math.random() * 6)]
        }`,
        instructor: [
          'Dr. Sarah Chen',
          'Prof. James Miller',
          'Dr. Amit Patel',
          'Rachel Green',
        ][Math.floor(Math.random() * 4)],
        duration: [60, 90, 120][Math.floor(Math.random() * 3)],
        scheduledAt: new Date(
          2024,
          11,
          Math.floor(Math.random() * 30) + 1,
          Math.floor(Math.random() * 8) + 10
        ).toISOString(),
        participants: Math.floor(Math.random() * 150) + 50,
        recordingAvailable: status === 'completed',
      });
    } else if (type === 'assignment') {
      activities.push({
        ...baseActivity,
        title: `Assignment ${Math.ceil(i / 3)} - ${
          [
            'Build a Recommendation System',
            'Deploy Microservices',
            'Data Pipeline Project',
            'UI Component Library',
          ][Math.floor(Math.random() * 4)]
        }`,
        dueDate: new Date(
          2024,
          11,
          Math.floor(Math.random() * 30) + 1
        ).toISOString(),
        totalPoints: [100, 150, 200][Math.floor(Math.random() * 3)],
        submittedAt:
          status === 'completed'
            ? new Date(
                2024,
                11,
                Math.floor(Math.random() * 20) + 1
              ).toISOString()
            : null,
        score:
          status === 'completed' ? Math.floor(Math.random() * 40) + 60 : null,
      });
    } else if (type === 'quiz') {
      activities.push({
        ...baseActivity,
        title: `Quiz ${Math.ceil(i / 2)} - ${
          [
            'Neural Networks Basics',
            'AWS Services',
            'JavaScript ES6+',
            'SQL Queries',
          ][Math.floor(Math.random() * 4)]
        }`,
        dueDate: new Date(
          2024,
          11,
          Math.floor(Math.random() * 30) + 1
        ).toISOString(),
        duration: [30, 45, 60][Math.floor(Math.random() * 3)],
        totalQuestions: [10, 15, 20][Math.floor(Math.random() * 3)],
        attempts:
          status === 'completed' ? Math.floor(Math.random() * 2) + 1 : 0,
        score:
          status === 'completed' ? Math.floor(Math.random() * 30) + 70 : null,
      });
    } else {
      activities.push({
        ...baseActivity,
        title: `Discussion - ${
          [
            'Ethical AI Considerations',
            'Cloud vs On-Premise',
            'Best Practices in Testing',
            'Career Transition Stories',
          ][Math.floor(Math.random() * 4)]
        }`,
        posts: Math.floor(Math.random() * 50) + 10,
        lastActivity: new Date(
          2024,
          11,
          Math.floor(Math.random() * 20) + 1
        ).toISOString(),
        participants: Math.floor(Math.random() * 100) + 20,
      });
    }
  }

  return activities;
};

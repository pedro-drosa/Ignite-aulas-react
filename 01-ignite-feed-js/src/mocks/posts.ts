export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedro-drosa.png',
      name: 'Pedro Mascarenhas',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'pedro.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-28 08:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pedro-drosa.png',
      name: 'John Doe',
      role: 'Backend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'john.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-06 08:20:00'),
  },
];

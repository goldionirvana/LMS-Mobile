import { Course, Module, Quiz, KMSEntry } from '../types';

export const COURSES: Course[] = [
  {
    id: 'mos',
    title: 'Managerial Operational Skill (MOS)',
    instructor: 'Operations Dept',
    thumbnail: 'https://picsum.photos/seed/manager/800/450',
    price: 0,
    rating: 4.9,
    students: 120,
    duration: '40h',
    category: 'Operational',
    description: 'Advanced managerial skills for operational excellence.',
    progress: 65,
  },
  {
    id: 'tos',
    title: 'Technical Operational Skill (TOS)',
    instructor: 'Technical Team',
    thumbnail: 'https://picsum.photos/seed/tech/800/450',
    price: 0,
    rating: 4.8,
    students: 350,
    duration: '30h',
    category: 'Technical',
    description: 'Core technical skills required for daily operations.',
    progress: 100,
  },
  {
    id: 'sos',
    title: 'Supervisory Operational Skill (SOS)',
    instructor: 'HR Training',
    thumbnail: 'https://picsum.photos/seed/supervise/800/450',
    price: 0,
    rating: 4.7,
    students: 200,
    duration: '25h',
    category: 'Supervisory',
    description: 'Developing leadership and supervisory capabilities.',
  },
  {
    id: 'stocker',
    title: 'Stocker Professional Training',
    instructor: 'Logistics Team',
    thumbnail: 'https://picsum.photos/seed/stock/800/450',
    price: 0,
    rating: 4.6,
    students: 500,
    duration: '15h',
    category: 'Operational',
    description: 'Efficient stock management and inventory control.',
  },
];

export const CATEGORIES = ['All', 'Operational', 'Technical', 'Supervisory'];

export const KMS_DATA: KMSEntry[] = [
  {
    id: 'kms-1',
    title: 'Cara Membuat Es Gobak Sodor',
    content: `Es Gobak Sodor adalah minuman khas yang menyegarkan. Berikut adalah langkah-langkah pembuatannya:
    
1. Siapkan es serut halus sebagai dasar.
2. Tambahkan sirup merah (cocopandan) secukupnya.
3. Masukkan potongan buah tropis seperti nangka, kelapa muda, dan alpukat.
4. Tuangkan susu kental manis di atasnya.
5. Sajikan segera selagi dingin.

Tips: Gunakan es batu yang bersih dan buah yang segar untuk rasa maksimal.`,
    category: 'Beverage',
    author: 'Kitchen Lead',
    updatedAt: '2024-03-25'
  },
  {
    id: 'kms-2',
    title: 'Rahasia Es Teh Segar',
    content: `Es Teh yang sempurna membutuhkan teknik brewing yang tepat:
    
1. Gunakan daun teh berkualitas tinggi.
2. Seduh teh dengan air suhu 90 derajat Celsius selama 3-5 menit.
3. Jangan memeras kantong teh agar tidak sepat.
4. Tambahkan gula saat teh masih panas agar larut sempurna.
5. Dinginkan sebelum ditambahkan es batu.

Rahasia: Tambahkan sedikit perasan lemon untuk aroma yang lebih segar.`,
    category: 'Beverage',
    author: 'Barista Trainer',
    updatedAt: '2024-03-24'
  },
  {
    id: 'kms-3',
    title: 'Standar Pembuatan Mie Gacoan',
    content: `Mie Gacoan memiliki standar rasa yang harus dijaga ketat:
    
1. Rebus mie selama tepat 2 menit dalam air mendidih.
2. Tiriskan mie hingga benar-benar kering.
3. Campurkan dengan bumbu rahasia Gacoan di mangkuk saji.
4. Tambahkan level pedas sesuai pesanan pelanggan.
5. Beri topping ayam cincang, pangsit goreng, dan bawang goreng.

Penting: Pastikan mie tidak lembek (al dente).`,
    category: 'Food',
    author: 'QC Manager',
    updatedAt: '2024-03-23'
  }
];

export const LEARNING_STATS = {
  completed: 12,
  inProgress: 5,
  totalHours: 156,
  khs: [
    { subject: 'MOS Module 1', grade: 'A', date: '2024-01-15' },
    { subject: 'TOS Technical', grade: 'B+', date: '2024-02-10' },
    { subject: 'Safety Training', grade: 'A', date: '2024-03-05' },
  ]
};

export const QUIZZES: Quiz[] = [
  {
    id: 'q-mos',
    title: 'MOS Module 1 Quiz',
    questions: [
      {
        id: '1',
        question: 'What is the primary goal of Managerial Operational Skill (MOS)?',
        options: ['Technical repair', 'Operational excellence', 'Customer service only', 'Stock counting'],
        correctAnswer: 1
      }
    ]
  }
];

export const COURSE_MODULES: Record<string, Module[]> = {
  'mos': [
    {
      id: 'm1',
      title: 'Managerial Basics',
      lessons: [
        { id: 'l1', title: 'Introduction to MOS', duration: '15:00', isCompleted: false, type: 'video', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
        { id: 'l2', title: 'Operational Standards', duration: '20:00', isCompleted: false, type: 'reading', content: 'Operational standards are the backbone of our business...' },
        { id: 'l3', title: 'Module 1 Quiz', duration: '05:00', isCompleted: false, type: 'quiz', quizId: 'q-mos' },
      ],
    },
  ],
  'tos': [
    {
      id: 'm1',
      title: 'Technical Skills',
      lessons: [
        { id: 'l1', title: 'Equipment Maintenance', duration: '30:00', isCompleted: true, type: 'video', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      ],
    },
  ],
};

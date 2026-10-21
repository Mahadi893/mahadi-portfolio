// ✏️ EDIT YOUR CONTENT HERE – the whole site reads from this file.
export const profile = {
  name: 'Mahadi Islam',
  title: 'Computer Science Student | Aspiring Software Engineer | Full-Stack Developer',
  typed: ['Computer Science Student', 'Aspiring Software Engineer', 'Full-Stack Developer', 'Competitive Programmer'],
  university: 'IUBAT — International University of Business Agriculture and Technology',
  location: 'Bangladesh',
  email: 'mahadirefat100@gmail.com',
  github: 'https://github.com/Mahadi893',
  linkedin: 'https://www.linkedin.com/feed/', // TODO: replace with your own profile URL
  photo: import.meta.env.VITE_PHOTO || `${import.meta.env.BASE_URL}profile.jpg`,
  photo2: import.meta.env.VITE_PHOTO2 || `${import.meta.env.BASE_URL}profile2.jpg`,
  cv: `${import.meta.env.BASE_URL}Mahadi_Islam_CV.pdf`,
  about: [
    "I'm a BSc student in Computer Science and Engineering at IUBAT, passionate about software engineering and web development.",
    "I enjoy problem-solving in C++ with data structures and algorithms, and I've solved 300+ programming problems on competitive platforms like Codeforces and LeetCode.",
    "I'm now growing into full-stack development with Python, Django and JavaScript, building projects to turn what I learn into real software.",
  ],
  highlights: [['300+', 'Problems solved'], ['3.60', 'Current CGPA'], ['5.00', 'GPA in SSC & HSC']],
}
export const navLinks = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Coding', 'Contact']
export const skills = [
  { category: 'Programming', icon: 'Code2', items: ['C', 'C++', 'Python', 'JavaScript'] },
  { category: 'Web Development', icon: 'Globe', items: ['HTML', 'CSS', 'Django'] },
  { category: 'Database Knowledge', icon: 'Database', items: ['SQL'] },
  { category: 'Tools', icon: 'Wrench', items: ['VS Code', 'Git', 'GitHub'] },
  { category: 'Core Skills', icon: 'Brain', items: ['Data Structures', 'Algorithms', 'Competitive Programming', 'Problem-Solving'] },
]
export const education = [
  { school: 'IUBAT — International University of Business Agriculture and Technology', degree: 'BSc in Computer Science and Engineering', year: '2024 – 2028 (expected)', note: 'Current CGPA: 3.60' },
  { school: 'BAF Shaheen College Dhaka', degree: 'HSC, Science', year: '2023', note: 'GPA 5.00' },
  { school: 'Adamjee Cantonment Public School', degree: 'SSC, Science', year: '2021', note: 'GPA 5.00' },
]
// status: 'Draft' | 'Placeholder' | 'Live'. Leave github/demo '' until a real link exists.
export const projects = [
  { name: 'Django E-Commerce Website', status: 'Draft', description: 'An online store built with Django: product listing, cart and orders.', details: 'Draft project. Planned features: product catalogue, cart, checkout flow and admin dashboard. Add the repository link when it is ready.', stack: ['Python', 'Django', 'SQL', 'HTML/CSS'], github: '', demo: '', image: '' },
  { name: 'Restaurant Management Website', status: 'Draft', description: 'A restaurant site with menu, reservations and order management.', details: 'Draft project. Aims to cover menu display, table reservation and basic order tracking.', stack: ['Django', 'JavaScript', 'SQL'], github: '', demo: '', image: '' },
  { name: 'Django Practice Projects', status: 'Draft', description: 'Small exercises I build while learning Django concepts.', details: 'A collection of practice apps covering models, views, templates and forms.', stack: ['Python', 'Django'], github: 'https://github.com/Mahadi893', demo: '', image: '' },
  { name: 'Future Software Projects', status: 'Placeholder', description: 'More full-stack and algorithm projects are coming soon.', details: 'Placeholder card. Replace it with a real project when you have one.', stack: ['React', 'C++', 'Python'], github: '', demo: '', image: '' },
]
export const cp = {
  solved: '300+',
  focus: ['C++ problem-solving', 'Data Structures and Algorithms'],
  platforms: [
    { name: 'Codeforces', url: 'https://codeforces.com/profile/Tomiyoka' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/mahadirefat/' },
  ],
}

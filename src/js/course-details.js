// Presentation
const presentationSection = document.getElementById('presentation');
const presentationBtn = document.getElementById('presentationBtn');
// Study Plan
const studyPlanSection = document.getElementById('studyPlan');
const studyPlanBtn = document.getElementById('studyPlanBtn');
// Profesional Paths
const profesionalPathsSection = document.getElementById('profesionalPaths');
const profesionalPathsBtn = document.getElementById('profesionalPathsBtn');
// Access
const accessSection = document.getElementById('access');
const accessBtn = document.getElementById('accessBtn');
// More Info
const moreInfoSection = document.getElementById('moreInfo');
const moreInfoBtn = document.getElementById('moreInfoBtn');

const sections = {
  'presentation': {
    'section': presentationSection,
    'btn': presentationBtn,
  },
  'studyPlan': {
    'section': studyPlanSection,
    'btn': studyPlanBtn,
  },
  'profesionalPaths': {
    'section': profesionalPathsSection,
    'btn': profesionalPathsBtn,
  },
  'access': {
    'section': accessSection,
    'btn': accessBtn,
  },
  'moreInfo': {
    'section': moreInfoSection,
    'btn': moreInfoBtn,
  },
};

const toogleSection = (section) => {
  Object.entries(sections).forEach((s) => {
    if (s[0] !== section) {
      s[1].section.style.display = 'none';
      s[1].btn.classList.remove('active');
      return;
    }
    s[1].section.style.display = 'flex';
    s[1].btn.classList.add('active');
  });
};
const technicians = [
  {
    id: 1,
    group: 'FIXORA',
    name: 'Marcus Johnson',
    initials: 'MJ',
    tone: 'green',
    specialty: 'Appliance repair · 9 years',
    rating: 4.98,
    reviews: 216,
    distance: 0.8,
    price: 89,
    status: 'available',
    nextSlot: 'Today, 1:30 PM',
    appliances: ['Refrigerator', 'Washer', 'Dishwasher'],
    issueSupport: {
      Refrigerator: ['Not cooling', 'Leaking water', 'Making unusual noise', 'Ice maker problem', "Won't turn on"],
      Washer: ["Won't drain or spin", 'Leaking water', 'Making unusual noise', "Won't start"],
      Dishwasher: ['Not cleaning dishes', 'Not draining', 'Leaking water', 'Making unusual noise', "Won't start"]
    },
    services: ['Repair', 'Maintenance'],
    slots: ['Today, 1:30 PM', 'Today, 3:00 PM', 'Tomorrow, 9:00 AM']
  },
  {
    id: 2,
    group: 'FIXORA',
    name: 'Alicia Rivera',
    initials: 'AR',
    tone: 'rose',
    specialty: 'Laundry & kitchen appliances · 7 years',
    rating: 4.96,
    reviews: 184,
    distance: 1.2,
    price: 79,
    status: 'available',
    nextSlot: 'Today, 2:00 PM',
    appliances: ['Washer', 'Oven', 'Dishwasher'],
    issueSupport: {
      Washer: ["Won't drain or spin", 'Leaking water', 'Making unusual noise', "Won't start", 'Dryer not heating'],
      Oven: ['Not heating', 'Uneven cooking', 'Burner will not light', 'Door will not close', "Won't turn on"],
      Dishwasher: ['Not cleaning dishes', 'Not draining', 'Leaking water', 'Making unusual noise', "Won't start"]
    },
    services: ['Repair', 'Installation'],
    slots: ['Today, 2:00 PM', 'Today, 4:30 PM', 'Tomorrow, 10:00 AM']
  },
  {
    id: 3,
    group: 'FIXORA',
    name: 'Daniel Kim',
    initials: 'DK',
    tone: 'blue',
    specialty: 'Cooling & refrigeration specialist',
    rating: 4.92,
    reviews: 152,
    distance: 1.7,
    price: 95,
    status: 'limited',
    nextSlot: 'Tomorrow, 8:30 AM',
    appliances: ['Refrigerator', 'HVAC'],
    issueSupport: {
      Refrigerator: ['Not cooling', 'Making unusual noise', 'Ice maker problem'],
      HVAC: ['Not cooling or heating', 'Weak airflow', 'Making unusual noise', 'Leaking water', "Won't turn on"]
    },
    services: ['Repair', 'Maintenance', 'Installation'],
    slots: ['Tomorrow, 8:30 AM', 'Tomorrow, 11:00 AM']
  },
  {
    id: 4,
    group: 'FIXORA',
    name: 'Sofia Patel',
    initials: 'SP',
    tone: 'sand',
    specialty: 'Certified home appliance technician',
    rating: 4.89,
    reviews: 128,
    distance: 2.1,
    price: 75,
    status: 'available',
    nextSlot: 'Today, 4:00 PM',
    appliances: ['Washer', 'Dishwasher', 'Oven'],
    issueSupport: {
      Washer: ["Won't drain or spin", 'Leaking water', 'Making unusual noise', "Won't start"],
      Dishwasher: ['Not cleaning dishes', 'Not draining', 'Leaking water', 'Making unusual noise', "Won't start"],
      Oven: ['Not heating', 'Uneven cooking', 'Burner will not light', 'Door will not close']
    },
    services: ['Repair', 'Maintenance'],
    slots: ['Today, 4:00 PM', 'Tomorrow, 9:30 AM', 'Tomorrow, 1:00 PM']
  },
  {
    id: 5,
    group: 'FIXORA',
    name: 'Andre Williams',
    initials: 'AW',
    tone: 'gold',
    specialty: 'Heating, cooling & range repair',
    rating: 4.87,
    reviews: 96,
    distance: 2.8,
    price: 85,
    status: 'limited',
    nextSlot: 'Tomorrow, 10:30 AM',
    appliances: ['HVAC', 'Oven', 'Refrigerator'],
    issueSupport: {
      HVAC: ['Not cooling or heating', 'Weak airflow', 'Making unusual noise', 'Leaking water', "Won't turn on"],
      Oven: ['Not heating', 'Uneven cooking', 'Burner will not light', "Won't turn on"],
      Refrigerator: ['Not cooling', 'Making unusual noise', 'Ice maker problem']
    },
    services: ['Repair', 'Installation'],
    slots: ['Tomorrow, 10:30 AM', 'Tomorrow, 2:30 PM']
  },
  {
    id: 6,
    group: 'FIXORA',
    name: 'Elena Brooks',
    initials: 'EB',
    tone: 'lavender',
    specialty: 'Washer, dryer & dishwasher expert',
    rating: 4.84,
    reviews: 83,
    distance: 3.4,
    price: 69,
    status: 'offline',
    nextSlot: 'Back online tomorrow',
    appliances: ['Washer', 'Dishwasher', 'Refrigerator'],
    issueSupport: {
      Washer: ["Won't drain or spin", 'Leaking water', 'Making unusual noise', "Won't start", 'Dryer not heating'],
      Dishwasher: ['Not cleaning dishes', 'Not draining', 'Leaking water', 'Making unusual noise', "Won't start"],
      Refrigerator: ['Not cooling', 'Leaking water', 'Making unusual noise']
    },
    services: ['Repair', 'Maintenance'],
    slots: []
  }
];

const issuesByAppliance = {
  Refrigerator: ['Not cooling', 'Leaking water', 'Making unusual noise', 'Ice maker problem', "Won't turn on", 'Not sure / something else'],
  Washer: ["Won't drain or spin", 'Leaking water', 'Making unusual noise', "Won't start", 'Dryer not heating', 'Not sure / something else'],
  Oven: ['Not heating', 'Uneven cooking', 'Burner will not light', 'Door will not close', "Won't turn on", 'Not sure / something else'],
  Dishwasher: ['Not cleaning dishes', 'Not draining', 'Leaking water', 'Making unusual noise', "Won't start", 'Not sure / something else'],
  HVAC: ['Not cooling or heating', 'Weak airflow', 'Making unusual noise', 'Leaking water', "Won't turn on", 'Not sure / something else'],
  Other: ['Not sure / something else']
};

const repairCostRanges = {
  Refrigerator: { min: 145, max: 340, issues: {
    'Not cooling': [50, 100], 'Leaking water': [-10, 25], 'Making unusual noise': [-20, 0],
    'Ice maker problem': [20, 65], "Won't turn on": [0, 35]
  } },
  Washer: { min: 105, max: 265, issues: {
    "Won't drain or spin": [0, 35], 'Leaking water': [-15, 25], 'Making unusual noise': [-20, 10],
    "Won't start": [-10, 30], 'Dryer not heating': [20, 70]
  } },
  Oven: { min: 110, max: 270, issues: {
    'Not heating': [0, 45], 'Uneven cooking': [-10, 25], 'Burner will not light': [-20, 25],
    'Door will not close': [-15, 15], "Won't turn on": [0, 40]
  } },
  Dishwasher: { min: 95, max: 235, issues: {
    'Not cleaning dishes': [-10, 25], 'Not draining': [-5, 25], 'Leaking water': [-10, 25],
    'Making unusual noise': [-20, 5], "Won't start": [0, 35]
  } },
  HVAC: { min: 170, max: 470, issues: {
    'Not cooling or heating': [30, 100], 'Weak airflow': [-10, 35], 'Making unusual noise': [-20, 35],
    'Leaking water': [0, 40], "Won't turn on": [15, 70]
  } },
  Other: { min: 100, max: 300, issues: {} }
};

const technicianGrid = document.getElementById('technicianGrid');
const applianceFilter = document.getElementById('applianceFilter');
const issueFilter = document.getElementById('issueFilter');
const serviceFilter = document.getElementById('serviceFilter');
const sortFilter = document.getElementById('sortFilter');
const locationInput = document.getElementById('locationInput');
const locationLabel = document.getElementById('locationLabel');
const emptyState = document.getElementById('emptyState');
const bookingDialog = document.getElementById('bookingDialog');
const bookingForm = document.getElementById('bookingForm');
const bookingSlot = document.getElementById('bookingSlot');
const bookingAppliance = document.getElementById('bookingAppliance');
const bookingIssue = document.getElementById('bookingIssue');
const estimatePreview = document.getElementById('estimatePreview');
const bookingEstimate = document.getElementById('bookingEstimate');
const toast = document.getElementById('toast');
const authDialog = document.getElementById('authDialog');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const servicePreviewDialog = document.getElementById('servicePreviewDialog');
const demoAccounts = new Map();
let availabilityFilter = 'all';
let toastTimeout;
let currentUser = null;
let pendingBookingTechnicianId = null;

const serviceDetails = {
  repair: {
    title: 'Appliance repair',
    imageAlt: 'Technician repairing a household appliance',
    description: 'FIXORA technicians diagnose common appliance problems and explain recommended next steps before repair work begins.',
    includes: ['Refrigerators, washers, ovens, dishwashers, and HVAC', 'Issue diagnosis and repair recommendations', 'Estimated price range before you request a visit']
  },
  maintenance: {
    title: 'Appliance maintenance',
    imageAlt: 'Technician checking equipment during maintenance',
    description: 'Routine maintenance can help household equipment work reliably and identify wear before it becomes a bigger issue.',
    includes: ['General inspection and performance checks', 'Cleaning and basic upkeep recommendations', 'A FIXORA team member matched to your appliance']
  },
  installation: {
    title: 'Appliance installation',
    imageAlt: 'Finished home with newly installed appliances',
    description: 'Request help with setup and installation for eligible household appliances and home equipment.',
    includes: ['Installation support for supported appliances', 'Setup and connection guidance', 'Appointment availability shown before requesting']
  }
};

function showAuthDialog() {
  loginForm.hidden = false;
  registerForm.hidden = true;
  document.getElementById('loginMessage').textContent = '';
  document.getElementById('registerMessage').textContent = '';
  authDialog.showModal();
  document.getElementById('loginEmail').focus();
}

function authenticate(user) {
  currentUser = user;
  const signInButton = document.getElementById('signInButton');
  signInButton.textContent = `Sign out, ${user.name}`;
  signInButton.setAttribute('aria-label', `Sign out ${user.name}`);
  authDialog.close();
  showToast(`You’re signed in as ${user.name}.`);
  if (pendingBookingTechnicianId !== null) {
    const technicianId = pendingBookingTechnicianId;
    pendingBookingTechnicianId = null;
    openBooking(technicianId);
  }
}

function updateIssueOptions(select, appliance, { optional = false } = {}) {
  const issues = issuesByAppliance[appliance] || [];
  select.replaceChildren();
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = appliance
    ? optional ? 'Choose a problem (optional)' : 'Choose a problem'
    : 'Choose an appliance first';
  select.append(placeholder);

  issues.forEach((issue) => {
    const option = document.createElement('option');
    option.value = issue;
    option.textContent = issue;
    select.append(option);
  });
  select.disabled = !appliance || issues.length === 0;
}

function updateSearchIssueOptions() {
  updateIssueOptions(issueFilter, applianceFilter.value, { optional: true });
}

function updateBookingApplianceOptions(technician, selectedAppliance) {
  bookingAppliance.replaceChildren();
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Select your appliance';
  bookingAppliance.append(placeholder);

  const applianceNames = {
    Refrigerator: 'Refrigerator',
    Washer: 'Washer & dryer',
    Oven: 'Oven & range',
    Dishwasher: 'Dishwasher',
    HVAC: 'Heating & cooling'
  };
  technician.appliances.forEach((appliance) => {
    const option = document.createElement('option');
    option.value = appliance;
    option.textContent = applianceNames[appliance] || appliance;
    bookingAppliance.append(option);
  });

  bookingAppliance.value = selectedAppliance;
}

function getRepairEstimate(appliance, issue, visitFee = 79) {
  const pricing = repairCostRanges[appliance];
  if (!pricing) return null;
  const [minAdjustment, maxAdjustment] = pricing.issues[issue] || [0, 0];
  return {
    min: Math.max(visitFee + 50, visitFee + pricing.min + minAdjustment),
    max: Math.max(visitFee + 100, visitFee + pricing.max + maxAdjustment)
  };
}

function formatEstimate(estimate) {
  return `$${estimate.min}–$${estimate.max}`;
}

function updateSearchEstimate() {
  const appliance = applianceFilter.value;
  const issue = issueFilter.value;
  const estimate = issue ? getRepairEstimate(appliance, issue) : null;
  estimatePreview.hidden = !estimate;
  if (!estimate) return;
  document.getElementById('estimateTitle').textContent =
    `Estimated ${appliance === 'HVAC' ? 'heating & cooling' : appliance} repair total`;
  document.getElementById('estimateDisclaimer').textContent =
    'Includes a typical visit and repair. Parts and final price vary.';
  document.getElementById('estimateRange').textContent = formatEstimate(estimate);
}

function updateBookingEstimate() {
  const appliance = bookingAppliance.value;
  const issue = bookingIssue.value;
  const technician = technicians.find((item) => item.id === Number(bookingDialog.dataset.technicianId));
  const estimate = appliance && issue && technician
    ? getRepairEstimate(appliance, issue, technician.price)
    : null;
  bookingEstimate.hidden = !estimate;
  if (estimate) {
    document.getElementById('bookingEstimateRange').textContent = formatEstimate(estimate);
    document.getElementById('bookingEstimateNote').textContent =
      `Includes ${technician.name}'s $${technician.price} visit fee and typical repair work. Parts or diagnosis may change the final price.`;
  }
}

function availabilityMarkup(technician) {
  if (technician.status === 'available') {
    return `<span class="availability-indicator"><i></i><strong>Available today</strong> · ${technician.nextSlot.replace('Today, ', '')}</span>`;
  }
  if (technician.status === 'limited') {
    return `<span class="availability-indicator busy"><i></i><strong>Next opening</strong> · ${technician.nextSlot}</span>`;
  }
  return '<span class="availability-indicator offline"><i></i><strong>Currently offline</strong> · Back tomorrow</span>';
}

function technicianCard(technician) {
  const chips = technician.services
    .map((service) => `<span class="service-chip">${service}</span>`)
    .join('');
  const disabled = technician.status === 'offline' ? 'disabled' : '';
  const buttonText = technician.status === 'offline' ? 'Unavailable' : 'Request a visit';

  return `
    <article class="technician-card">
      <div class="technician-main">
        <div class="tech-heading">
          <div class="tech-avatar" data-tone="${technician.tone}" aria-hidden="true">${technician.initials}</div>
          <div class="tech-info">
            <div class="tech-name-row">
              <h3 class="tech-name">${technician.name}</h3>
              <span class="verified" aria-label="Verified technician">✓</span>
              <span class="team-badge">${technician.group} member</span>
              <span class="tech-distance">${technician.distance.toFixed(1)} mi</span>
            </div>
            <p class="tech-specialty">${technician.specialty}</p>
          </div>
        </div>
        <div class="tech-stats">
          <span class="rating"><span class="rating-star" aria-hidden="true">★</span> ${technician.rating.toFixed(2)}</span>
          <span>${technician.reviews} reviews</span>
          <span class="stat-divider" aria-hidden="true"></span>
          <span>Visit from $${technician.price}</span>
        </div>
        <div class="service-chips">${chips}</div>
      </div>
      <div class="technician-foot">
        ${availabilityMarkup(technician)}
        <button class="book-button" type="button" data-technician-id="${technician.id}" ${disabled}>${buttonText}</button>
      </div>
    </article>
  `;
}

function renderTechnicians() {
  const appliance = applianceFilter.value;
  const issue = issueFilter.value;
  const service = serviceFilter.value;
  const searchTerm = locationInput.value.trim().toLowerCase();

  const groupTechnicians = technicians.filter((technician) => technician.group === 'FIXORA');
  const matching = groupTechnicians.filter((technician) => {
    const matchesAppliance = appliance === 'all' || technician.appliances.includes(appliance);
    const matchesIssue = !issue ||
      issue === 'Not sure / something else' ||
      technician.issueSupport[appliance]?.includes(issue) === true;
    const matchesService = service === 'all' || technician.services.includes(service);
    const matchesAvailability = availabilityFilter !== 'available' || technician.status === 'available';
    const matchesLocation = !searchTerm ||
      /^(brooklyn(?:,\s*ny)?|new york|112\d{2})$/.test(searchTerm) ||
      searchTerm === 'current location';
    return matchesAppliance && matchesIssue && matchesService && matchesAvailability && matchesLocation;
  });

  if (sortFilter.value === 'rating') {
    matching.sort((a, b) => b.rating - a.rating);
  } else if (sortFilter.value === 'price-low') {
    matching.sort((a, b) => a.price - b.price);
  } else {
    matching.sort((a, b) => {
      const statusOrder = { available: 0, limited: 1, offline: 2 };
      return statusOrder[a.status] - statusOrder[b.status] || a.distance - b.distance;
    });
  }

  technicianGrid.innerHTML = matching.map(technicianCard).join('');
  technicianGrid.hidden = matching.length === 0;
  emptyState.hidden = matching.length !== 0;
  document.getElementById('allCount').textContent = String(groupTechnicians.length);

  technicianGrid.querySelectorAll('.book-button:not(:disabled)').forEach((button) => {
    button.addEventListener('click', () => openBooking(Number(button.dataset.technicianId)));
  });
}

function showToast(message) {
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 4200);
}

function openBooking(technicianId) {
  const technician = technicians.find((item) => item.id === technicianId);
  if (!technician) {
    showToast('That technician could not be found. Please refresh and try again.');
    return;
  }
  if (technician.group !== 'FIXORA') {
    showToast('Bookings are available only with FIXORA team members.');
    return;
  }
  if (!currentUser) {
    pendingBookingTechnicianId = technicianId;
    showAuthDialog();
    return;
  }

  document.getElementById('bookingTechnician').textContent =
    `${technician.name} · ${technician.nextSlot} · from $${technician.price}`;
  document.getElementById('bookingAccount').textContent = `Booking as ${currentUser.name}`;
  document.getElementById('bookingEmail').value = currentUser.email;
  bookingSlot.innerHTML = technician.slots
    .map((slot) => `<option value="${slot}">${slot}</option>`)
    .join('');
  const selectedAppliance = applianceFilter.value !== 'all' && technician.appliances.includes(applianceFilter.value)
    ? applianceFilter.value
    : technician.appliances[0];
  updateBookingApplianceOptions(technician, selectedAppliance);
  updateIssueOptions(bookingIssue, bookingAppliance.value);
  bookingIssue.value = Array.from(bookingIssue.options).some((option) => option.value === issueFilter.value)
    ? issueFilter.value
    : '';
  document.getElementById('bookingDetails').value = '';
  bookingDialog.dataset.technicianId = String(technician.id);
  updateBookingEstimate();
  bookingDialog.showModal();
}

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const location = locationInput.value.trim();
  if (!location) {
    locationInput.focus();
    showToast('Enter a city or ZIP code to find nearby technicians.');
    return;
  }
  locationLabel.textContent = location;
  renderTechnicians();
  document.getElementById('technicians').scrollIntoView({ behavior: 'smooth' });
});

applianceFilter.addEventListener('change', () => {
  updateSearchIssueOptions();
  updateSearchEstimate();
  renderTechnicians();
});
issueFilter.addEventListener('change', () => {
  updateSearchEstimate();
  renderTechnicians();
});
serviceFilter.addEventListener('change', renderTechnicians);
sortFilter.addEventListener('change', renderTechnicians);

document.querySelectorAll('.availability-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    availabilityFilter = tab.dataset.availability;
    document.querySelectorAll('.availability-tab').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderTechnicians();
  });
});

document.getElementById('showAllButton').addEventListener('click', () => {
  applianceFilter.value = 'all';
  updateSearchIssueOptions();
  issueFilter.value = '';
  updateSearchEstimate();
  serviceFilter.value = 'all';
  availabilityFilter = 'all';
  document.querySelectorAll('.availability-tab').forEach((tab) => {
    const active = tab.dataset.availability === 'all';
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  renderTechnicians();
});

document.getElementById('resetFilters').addEventListener('click', () => {
  applianceFilter.value = 'all';
  updateSearchIssueOptions();
  issueFilter.value = '';
  updateSearchEstimate();
  serviceFilter.value = 'all';
  locationInput.value = 'Brooklyn, NY';
  locationLabel.textContent = locationInput.value;
  availabilityFilter = 'all';
  document.querySelectorAll('.availability-tab').forEach((tab) => {
    const active = tab.dataset.availability === 'all';
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  renderTechnicians();
});

document.getElementById('mapButton').addEventListener('click', () => {
  showToast('Map view is not available in this demo. Use the list to compare local technicians.');
});

document.getElementById('signInButton').addEventListener('click', () => {
  if (currentUser) {
    const signedOutName = currentUser.name;
    currentUser = null;
    document.getElementById('signInButton').textContent = 'Sign in';
    document.getElementById('signInButton').setAttribute('aria-label', 'Sign in');
    showToast(`You have signed out, ${signedOutName}.`);
    return;
  }
  showAuthDialog();
});

document.getElementById('showRegister').addEventListener('click', () => {
  loginForm.hidden = true;
  registerForm.hidden = false;
  document.getElementById('registerMessage').textContent = '';
  document.getElementById('registerName').focus();
});

document.getElementById('showLogin').addEventListener('click', () => {
  registerForm.hidden = true;
  loginForm.hidden = false;
  document.getElementById('loginMessage').textContent = '';
  document.getElementById('loginEmail').focus();
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const account = demoAccounts.get(email);
  if (!account || account.password !== password) {
    document.getElementById('loginMessage').textContent =
      'No matching demo account. Register during this page session first.';
    return;
  }
  loginForm.reset();
  authenticate({ name: account.name, email });
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!registerForm.reportValidity()) return;
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim().toLowerCase();
  const password = document.getElementById('registerPassword').value;
  if (!name) {
    document.getElementById('registerMessage').textContent = 'Enter your name to create an account.';
    return;
  }
  if (demoAccounts.has(email)) {
    document.getElementById('registerMessage').textContent =
      'An account with this email already exists in this page session. Sign in instead.';
    return;
  }
  demoAccounts.set(email, { name, password });
  registerForm.reset();
  authenticate({ name, email });
});

document.getElementById('closeAuth').addEventListener('click', () => {
  authDialog.close();
  pendingBookingTechnicianId = null;
});
authDialog.addEventListener('click', (event) => {
  if (event.target === authDialog) {
    authDialog.close();
    pendingBookingTechnicianId = null;
  }
});
authDialog.addEventListener('cancel', () => {
  pendingBookingTechnicianId = null;
});

document.querySelectorAll('[data-service-preview]').forEach((button) => {
  button.addEventListener('click', () => {
    const service = serviceDetails[button.dataset.servicePreview];
    const image = button.querySelector('img');
    if (!service || !image) {
      showToast('This service preview is unavailable. Please try again.');
      return;
    }
    document.getElementById('servicePreviewImage').src = image.currentSrc || image.src;
    document.getElementById('servicePreviewImage').alt = service.imageAlt;
    document.getElementById('servicePreviewTitle').textContent = service.title;
    document.getElementById('servicePreviewDescription').textContent = service.description;
    const includes = document.getElementById('servicePreviewIncludes');
    includes.replaceChildren(...service.includes.map((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      return listItem;
    }));
    servicePreviewDialog.showModal();
  });
});

document.getElementById('closeServicePreview').addEventListener('click', () => {
  servicePreviewDialog.close();
});
document.getElementById('servicePreviewBook').addEventListener('click', () => {
  servicePreviewDialog.close();
});
servicePreviewDialog.addEventListener('click', (event) => {
  if (event.target === servicePreviewDialog) servicePreviewDialog.close();
});

document.getElementById('locateButton').addEventListener('click', (event) => {
  if (!navigator.geolocation) {
    showToast('Location services are not supported by this browser.');
    return;
  }

  const button = event.currentTarget;
  button.disabled = true;
  button.textContent = '…';
  navigator.geolocation.getCurrentPosition(
    (position) => {
      locationInput.value = 'Current location';
      locationLabel.textContent = 'your current location';
      renderTechnicians();
      button.disabled = false;
      button.textContent = '◎';
      document.getElementById('technicians').scrollIntoView({ behavior: 'smooth' });
    },
    (error) => {
      button.disabled = false;
      button.textContent = '◎';
      const message = error.code === error.PERMISSION_DENIED
        ? 'Location access was denied. You can enter a city or ZIP code instead.'
        : 'Your location could not be determined. Please enter a city or ZIP code.';
      showToast(message);
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
  );
});

document.getElementById('closeBooking').addEventListener('click', () => bookingDialog.close());
bookingAppliance.addEventListener('change', () => {
  updateIssueOptions(bookingIssue, bookingAppliance.value);
  updateBookingEstimate();
});
bookingIssue.addEventListener('change', updateBookingEstimate);
bookingDialog.addEventListener('click', (event) => {
  if (event.target === bookingDialog) bookingDialog.close();
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  if (!currentUser) {
    pendingBookingTechnicianId = Number(bookingDialog.dataset.technicianId);
    bookingDialog.close();
    showAuthDialog();
    return;
  }
  const selectedTechnician = technicians.find(
    (item) => item.id === Number(bookingDialog.dataset.technicianId)
  );
  if (!selectedTechnician || selectedTechnician.group !== 'FIXORA') {
    showToast('The selected technician is no longer available. Please try again.');
    bookingDialog.close();
    return;
  }
  const appliance = bookingAppliance.value;
  const issue = bookingIssue.value;
  const issueDetails = document.getElementById('bookingDetails').value.trim();
  bookingDialog.close();
  bookingForm.reset();
  showToast(`Demo request prepared for ${currentUser.name}: ${appliance} · ${issue}${issueDetails ? ` · ${issueDetails}` : ''}. This prototype does not contact a provider.`);
});

updateSearchIssueOptions();
updateSearchEstimate();
renderTechnicians();

// alert("clicked");

const namee = document.querySelector('#name')
const role = document.querySelector('#role')
const locationn = document.querySelector('#location')
const bio = document.querySelector('#bio')
const profile = document.querySelector('#profile')

const profiles = [];

class Profile {
    constructor(namee, role, locationn, bio, profile) {
        this.namee = namee;
        this.role = role;
        this.locationn = locationn;
        this.bio = bio;
        this.profile = profile;
    }
}

function addProfile() {
    console.log("clicked");

    if (!namee.value.trim() && !role.value.trim() && !locationn.value.trim() && !bio.value.trim() && !profile.value.trim()) {
        alert("Please fill all the fields");
        return;
    }

    const newProfile = new Profile(namee.value, role.value, locationn.value, bio.value, profile.value);
    profiles.push(newProfile);
    console.log(profiles);
    displayProfile();

    namee.value = '';
    role.value = '';
    locationn.value = '';
    bio.value = '';
    profile.value = '';
}

function displayProfile() {
    const profileCards = document.querySelector('#cards');
    profileCards.innerHTML = "";

    profiles.forEach((item, index) => {
        const card = document.createElement('div');
        card.innerHTML = `
        <article class="card bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center relative">
                <img class="w-24 h-24 rounded-full object-cover mb-3" src=${item.profile}
                    alt="Profile picture of Alice" />
                <h2 class="text-lg font-medium">${item.namee}</h2>
                <p class="text-sm text-indigo-600">${item.role}</p>
                <p class="text-xs text-gray-500 mt-1">Location: ${item.locationn}</p>
                <p class="text-sm text-gray-700 mt-3">Bio: ${item.bio}</p>
                <button 
                    onclick ="deleteProfiles(${index})"
                    class="delete-btn mt-4 px-3 py-1 rounded-full text-sm bg-red-50 text-red-600 border border-red-100 hover:bg-red-100">Delete</button>
            </article> 
        `
        profileCards.appendChild(card);
    })
}

function deleteProfiles(index) {
    profiles.splice(index, 1);
    displayProfile();
}

function searchProfile() {
    const search = document.querySelector('#search').value.toLowerCase();
    const result = profiles.filter((item) => item.namee.toLowerCase().includes(search));

    const profileCards = document.querySelector('#cards');
    profileCards.innerHTML = "";
    if (search === '') {
        displayProfile();
        `<span>No results found</span>`
    } else {
        result.forEach((item, index) => {
            const card = document.createElement('div');
            card.innerHTML = `
        <article class="card bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center relative">
                <img class="w-24 h-24 rounded-full object-cover mb-3" src=${item.profile}
                    alt="Profile picture of Alice" />
                <h2 class="text-lg font-medium">${item.namee}</h2>
                <p class="text-sm text-indigo-600">${item.role}</p>
                <p class="text-xs text-gray-500 mt-1">Location: ${item.locationn}</p>
                <p class="text-sm text-gray-700 mt-3">Bio: ${item.bio}</p>
                <button 
                    onclick ="deleteProfiles(${index})"
                    class="delete-btn mt-4 px-3 py-1 rounded-full text-sm bg-red-50 text-red-600 border border-red-100 hover:bg-red-100">Delete</button>
            </article> 
        `
            profileCards.appendChild(card);
        })
    }
}

search.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        searchProfile();
    }
})


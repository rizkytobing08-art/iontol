// Data Komik
const komiksData = [
    {
        id: 1,
        title: "Naruto Shippuden",
        category: "action",
        rating: 9.2,
        chapters: 500,
        image: "https://via.placeholder.com/200x280/FF6B6B/FFFFFF?text=Naruto",
        description: "Kisah petualangan Naruto Uzumaki seorang ninja muda yang bermimpi menjadi Hokage. Dengan tekad yang kuat dan teman-teman setia, dia akan menghadapi berbagai tantangan dan musuh yang kuat."
    },
    {
        id: 2,
        title: "One Piece",
        category: "action",
        rating: 9.1,
        chapters: 1050,
        image: "https://via.placeholder.com/200x280/4ECDC4/FFFFFF?text=One+Piece",
        description: "Petualangan Monkey D. Luffy dan timnya mencari harta karun terkenal One Piece. Penuh dengan action, persahabatan, dan mimpi yang tidak pernah menyerah."
    },
    {
        id: 3,
        title: "Attack on Titan",
        category: "action",
        rating: 9.0,
        chapters: 139,
        image: "https://via.placeholder.com/200x280/95E1D3/FFFFFF?text=Attack+Titan",
        description: "Pertempuran manusia melawan raksasa Titan yang misterius. Eren Yeager dan teman-temannya berjuang untuk mempertahankan kemanusiaan dan mengungkap rahasia di balik Titan."
    },
    {
        id: 4,
        title: "Kaguya-sama: Love is War",
        category: "romance",
        rating: 8.9,
        chapters: 220,
        image: "https://via.placeholder.com/200x280/FFB6C1/FFFFFF?text=Kaguya+Love",
        description: "Dua jenius yang saling menyukai namun terlalu bangga untuk mengakui. Mereka bermain strategi psikologi rumit untuk membuat yang lain mengaku cinta terlebih dahulu."
    },
    {
        id: 5,
        title: "My Hero Academia",
        category: "action",
        rating: 8.8,
        chapters: 380,
        image: "https://via.placeholder.com/200x280/FF8C42/FFFFFF?text=My+Hero",
        description: "Izuku Midoriya seorang remaja tanpa kekuatan di dunia yang penuh dengan para superhero. Dia berusaha keras untuk menjadi pahlawan terbaik dengan ketekunan dan semangat."
    },
    {
        id: 6,
        title: "Jujutsu Kaisen",
        category: "action",
        rating: 8.7,
        chapters: 230,
        image: "https://via.placeholder.com/200x280/9B59B6/FFFFFF?text=Jujutsu+Kaisen",
        description: "Yuji Itadori bergabung dengan sekolah sihir untuk membunuh iblis kutukan. Dengan kekuatan sihir jujutsu, dia dan teman-temannya melindungi dunia dari ancaman supernatural."
    },
    {
        id: 7,
        title: "Death Note",
        category: "horror",
        rating: 8.9,
        chapters: 108,
        image: "https://via.placeholder.com/200x280/2C3E50/FFFFFF?text=Death+Note",
        description: "Light Yagami menemukan notebook ajaib yang dapat membunuh siapa saja. Dia bermain Tuhan dengan memutuskan hidup dan mati, menciptakan perang intelijen yang mendebarkan."
    },
    {
        id: 8,
        title: "Demon Slayer",
        category: "action",
        rating: 8.8,
        chapters: 205,
        image: "https://via.placeholder.com/200x280/E74C3C/FFFFFF?text=Demon+Slayer",
        description: "Tanjiro Kamado mengejar Demon Lord untuk menyelamatkan saudarinya yang berubah menjadi demon. Cerita penuh dengan pertempuran spektakuler dan emosi yang mendalam."
    },
    {
        id: 9,
        title: "Tokyo Ghoul",
        category: "horror",
        rating: 8.6,
        chapters: 144,
        image: "https://via.placeholder.com/200x280/34495E/FFFFFF?text=Tokyo+Ghoul",
        description: "Ken Kaneki seorang manusia biasa yang menjadi setengah ghoul. Dia harus belajar hidup di antara dua dunia yang saling bermusuhan."
    },
    {
        id: 10,
        title: "Sword Art Online",
        category: "fantasy",
        rating: 7.9,
        chapters: 126,
        image: "https://via.placeholder.com/200x280/3498DB/FFFFFF?text=Sword+Art",
        description: "Ribuan pemain terjebak dalam game virtual reality dan harus mengalahkan semua level untuk keluar. Kirito harus menjadi yang terkuat untuk menyelamatkan semua orang."
    },
    {
        id: 11,
        title: "Full Metal Alchemist",
        category: "fantasy",
        rating: 9.1,
        chapters: 116,
        image: "https://via.placeholder.com/200x280/F39C12/FFFFFF?text=FMA",
        description: "Dua bersaudara mempelajari alkimia untuk mengembalikan tubuh mereka yang rusak. Perjalanan epik penuh dengan filosofi, pengorbanan, dan pertumbuhan karakter."
    },
    {
        id: 12,
        title: "Haikyu!!",
        category: "comedy",
        rating: 8.7,
        chapters: 402,
        image: "https://via.placeholder.com/200x280/1ABC9C/FFFFFF?text=Haikyu",
        description: "Karasuno High School volleyball team berusaha menjadi champion. Cerita penuh semangat, persahabatan, dan pertumbuhan melalui olahraga."
    }
];

// DOM Elements
const populerKomikDiv = document.getElementById('populerKomik');
const categoryKomikDiv = document.getElementById('categoryKomik');
const latestKomikDiv = document.getElementById('latestKomik');
const modal = document.getElementById('comicModal');
const closeBtn = document.querySelector('.close');
const categoryBtns = document.querySelectorAll('.category-btn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

let selectedCategory = 'semua';
let filteredKomiks = komiksData;

// Function untuk render comic cards
function renderComicCard(comic) {
    return `
        <div class="comic-card" onclick="openModal(${comic.id})">
            <img src="${comic.image}" alt="${comic.title}" class="comic-image">
            <div class="comic-info">
                <h3 class="comic-title">${comic.title}</h3>
                <span class="comic-category">${comic.category.charAt(0).toUpperCase() + comic.category.slice(1)}</span>
                <div class="comic-rating">
                    <span>⭐ ${comic.rating}</span>
                </div>
                <p class="comic-chapters">${comic.chapters} Chapters</p>
            </div>
        </div>
    `;
}

// Function untuk render featured card
function renderFeaturedCard(comic) {
    return `
        <div class="featured-card" onclick="openModal(${comic.id})">
            <div style="position: relative;">
                <img src="${comic.image}" alt="${comic.title}" class="featured-image">
                <span class="featured-badge">Terbaru</span>
            </div>
            <div class="featured-info">
                <h3 class="featured-title">${comic.title}</h3>
                <p class="featured-author">Genre: ${comic.category.charAt(0).toUpperCase() + comic.category.slice(1)}</p>
                <p class="featured-description">${comic.description}</p>
            </div>
        </div>
    `;
}

// Initialize - Tampilkan komik populer
function initializePopular() {
    const popular = komiksData.slice(0, 6);
    populerKomikDiv.innerHTML = popular.map(comic => renderComicCard(comic)).join('');
}

// Initialize - Tampilkan semua komik di kategori
function initializeCategories() {
    categoryKomikDiv.innerHTML = komiksData.map(comic => renderComicCard(comic)).join('');
}

// Initialize - Tampilkan komik terbaru (featured)
function initializeFeatured() {
    const featured = komiksData.slice(0, 4);
    latestKomikDiv.innerHTML = featured.map(comic => renderFeaturedCard(comic)).join('');
}

// Filter berdasarkan kategori
function filterByCategory(category) {
    selectedCategory = category;
    
    if (category === 'semua') {
        filteredKomiks = komiksData;
    } else {
        filteredKomiks = komiksData.filter(comic => comic.category === category);
    }
    
    categoryKomikDiv.innerHTML = filteredKomiks.map(comic => renderComicCard(comic)).join('');
    
    // Update active button
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Category button event listeners
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterByCategory(this.getAttribute('data-category'));
    });
});

// Open Modal
function openModal(comicId) {
    const comic = komiksData.find(c => c.id === comicId);
    
    if (comic) {
        document.getElementById('modalImage').src = comic.image;
        document.getElementById('modalTitle').textContent = comic.title;
        document.getElementById('modalRating').textContent = comic.rating;
        document.getElementById('modalCategory').textContent = comic.category.charAt(0).toUpperCase() + comic.category.slice(1);
        document.getElementById('modalDescription').textContent = comic.description;
        document.getElementById('modalChapters').textContent = comic.chapters;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Search functionality
searchBtn.addEventListener('click', function() {
    const searchValue = searchInput.value.toLowerCase().trim();
    
    if (searchValue === '') {
        categoryKomikDiv.innerHTML = komiksData.map(comic => renderComicCard(comic)).join('');
        return;
    }
    
    const searchResults = komiksData.filter(comic => 
        comic.title.toLowerCase().includes(searchValue) ||
        comic.category.toLowerCase().includes(searchValue) ||
        comic.description.toLowerCase().includes(searchValue)
    );
    
    if (searchResults.length === 0) {
        categoryKomikDiv.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">Komik tidak ditemukan. Coba kata kunci lain.</p>';
    } else {
        categoryKomikDiv.innerHTML = searchResults.map(comic => renderComicCard(comic)).join('');
    }
});

// Search with Enter key
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Smooth scroll untuk navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button "Mulai Membaca" di hero section
document.querySelector('.btn-primary').addEventListener('click', function() {
    document.querySelector('#categories').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Initialize saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initializePopular();
    initializeCategories();
    initializeFeatured();
    
    // Add animation to cards saat halaman dimuat
    const cards = document.querySelectorAll('.comic-card, .featured-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s backwards`;
    });
});

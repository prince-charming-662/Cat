document.getElementById('fetch-cat').addEventListener('click', fetchCatImage);
document.getElementById('show-author').addEventListener('click', showAuthorImage);

async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': 'live_KIaqYvOo96IAtjUqpGNCBWPHa3brzOq5uAWqsqUCWGja6SXViqx2w2FCsMJ4PMo6'
            }
        });
        const data = await response.json();
        const imageUrl = data[0].url;
        const catImage = document.getElementById('cat-image');
        catImage.src = imageUrl;
        catImage.style.display = 'block';
        document.getElementById('show-author').classList.remove('hidden');
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

function showAuthorImage() {
    document.getElementById('author-container').classList.toggle('hidden');
}

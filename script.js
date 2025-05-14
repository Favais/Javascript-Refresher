// DOM elements
const form = document.getElementById('addreview')
const reviews = document.getElementById('reviews')
const upvote = document.getElementById('upvote')
const downvote = document.getElementById('downvote')
const starRating = document.getElementById('starrating')



// Initial data 
const data = [
    {

        id: 1,
        comment: "Excellent read!",
        read: false,
        star: 5

    },
    {
        id: 2,
        comment: "A powerful, raw critique of colonialism. Fanon’s message is still deeply relevant today.",
        read: true,
        star: 5
    },
    {
        id: 3,
        comment: "Challenging but essential reading. It forces you to rethink history and power.",
        read: true,
        star: 4
    },
    {
        id: 4,
        comment: "Very practical examples.",
        read: true,
        star: 2
    },

    {
        id: 5,
        comment: "A must-have for developers.",
        read: false,
        star: 1
    }
]



const showReviews = async () => {
    let oldData = data

    // Using reduce array method to get the Average rating
    const rating = data.reduce((total, value, index, arr) => total + value.star / arr.length, 0)

    console.log("Using reduce to get");
    starRating.innerHTML = ''

    // Rendering stars using loop
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('img')
        if (rating >= i) {
            star.src = './star-full.png'
        } else if (rating >= i - 0.9) {
            star.src = './star-half.png'
        } else {
            star.src = './star.png'
        }
        starRating.append(star)
    }

    // Show good reviews functionality 
    upvote.addEventListener('click', () => {
        let newData = oldData.filter(rev => rev.read)
        reviews.innerHTML = ''
        newData.forEach(({ comment, read }) => {
            let review = document.createElement('p')
            review.innerText = comment
            const thumbsImg = document.createElement('img')
            review.appendChild(thumbsImg)
            read ? thumbsImg.src = "./thumb_up.png" : thumbsImg.src = "./thumb_down.png"
            reviews.appendChild(review)
        })
    })

    // Show bad reviews functionality
    downvote.addEventListener('click', () => {
        let newData = oldData.filter(rev => !rev.read)
        reviews.innerHTML = ''
        newData.forEach(({ comment, read }) => {
            let review = document.createElement('p')
            review.innerText = comment
            const thumbsImg = document.createElement('img')
            review.appendChild(thumbsImg)
            read ? thumbsImg.src = "./thumb_up.png" : thumbsImg.src = "./thumb_down.png"
            reviews.appendChild(review)
        })
    })

    // Default or Show all reviews on load
    oldData.forEach(({ comment, read }) => {
        let review = document.createElement('p')
        review.innerText = comment
        const thumbsImg = document.createElement('img')
        review.appendChild(thumbsImg)
        read ? thumbsImg.src = "./thumb_up.png" : thumbsImg.src = "./thumb_down.png"
        reviews.appendChild(review)
    })


}
showReviews()

// Add new reviews
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    const reviewData = {
        id: data.length + 1,
        comment: formData.get('review'),
        star: parseInt(formData.get('rating')),
        read: formData.has('status')
    }
    console.log(reviewData);

    data.push(reviewData)
    form.reset()
    showReviews()
    reviews.scrollTop = reviews.scrollHeight;
})

console.log(
    `// DOM elements
const form = document.getElementById('addreview')
const reviews = document.getElementById('reviews')
const upvote = document.getElementById('upvote')
const downvote = document.getElementById('downvote')
const starRating = document.getElementById('starrating')



// Initial data
const data = [
    {

        id: 1,
        comment: "Excellent read!",
        read: false,
        star: 5

    },
    {
        id: 2,
        comment: "A powerful, raw critique of colonialism. Fanon’s message is still deeply relevant today.",
        read: true,
        star: 5
    },
    {
        id: 3,
        comment: "Challenging but essential reading. It forces you to rethink history and power.",
        read: true,
        star: 4
    },
    {
        id: 4,
        comment: "Very practical examples.",
        read: true,
        star: 2
    },

    {
        id: 5,
        comment: "A must-have for developers.",
        read: false,
        star: 1
    }
]



const showReviews = async () => {
    let oldData = data

    // Using reduce array method to get the Average rating
    const rating = data.reduce((total, value, index, arr) => total + value.star / arr.length, 0)

    console.log("Using reduce to get");
    starRating.innerHTML = ''

    // Rendering stars using loop
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('img')
        if (rating >= i) {
            star.src = './star-full.png'
        } else if (rating >= i - 0.9) {
            star.src = './star-half.png'
        } else {
            star.src = './star.png'
        }
        starRating.append(star)
    }

    // Show good reviews functionality
    upvote.addEventListener('click', () => {
        let newData = oldData.filter(rev => rev.read)
        reviews.innerHTML = ''
        newData.forEach(({ comment, read }) => {
            let review = document.createElement('p')
            review.innerText = comment
            const thumbsImg = document.createElement('img')
            review.appendChild(thumbsImg)
            read ? thumbsImg.src = "./thumb_up.png" : thumbsImg.src = "./thumb_down.png"
            reviews.appendChild(review)
        })
    })

    // Show bad reviews functionality
    downvote.addEventListener('click', () => {
        let newData = oldData.filter(rev => !rev.read)
        reviews.innerHTML = ''
        newData.forEach(({ comment, read }) => {
            let review = document.createElement('p')
            review.innerText = comment
            const thumbsImg = document.createElement('img')
            review.appendChild(thumbsImg)
            read ? thumbsImg.src = "./thumb_up.png" : thumbsImg.src = "./thumb_down.png"
            reviews.appendChild(review)
        })
    })

    // Default or Show all reviews on load
    oldData.forEach(({ comment, read }) => {
        let review = document.createElement('p')
        review.innerText = comment
        const thumbsImg = document.createElement('img')
        review.appendChild(thumbsImg)
        read ? thumbsImg.src = "./thumb_up.png" : thumbsImg.src = "./thumb_down.png"
        reviews.appendChild(review)
    })


}
showReviews()

// Add new reviews
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    const reviewData = {
        id: data.length + 1,
        comment: formData.get('review'),
        star: parseInt(formData.get('rating')),
        read: formData.has('status')
    }
    console.log(reviewData);

    data.push(reviewData)
    form.reset()
    showReviews()
    reviews.scrollTop = reviews.scrollHeight;
})`
);

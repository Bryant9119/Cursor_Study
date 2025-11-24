import React from 'react'
import FeedItem from './FeedItem'
import './Feed.css'

function Feed() {
  const posts = [
    {
      id: 1,
      username: 'traveler_john',
      profileImage: '/man.png',
      image: '/img01.png',
      likes: 1234,
      caption: 'Beautiful sunset view 🌅',
      comments: [
        { username: 'friend1', text: 'Amazing!' },
        { username: 'friend2', text: 'Love this!' }
      ],
      timestamp: '2시간 전'
    },
    {
      id: 2,
      username: 'nature_lover',
      profileImage: '/woman.png',
      image: '/img02.jpg',
      likes: 856,
      caption: 'Peaceful morning in the mountains ⛰️',
      comments: [
        { username: 'friend3', text: 'So peaceful!' }
      ],
      timestamp: '5시간 전'
    },
    {
      id: 3,
      username: 'adventure_seeker',
      profileImage: '/man.png',
      image: '/img03.jpg',
      likes: 2341,
      caption: 'Exploring new places 🗺️',
      comments: [
        { username: 'friend4', text: 'Where is this?' },
        { username: 'friend5', text: 'Incredible view!' }
      ],
      timestamp: '1일 전'
    },
    {
      id: 4,
      username: 'photography_pro',
      profileImage: '/woman.png',
      image: '/img04.png',
      likes: 3421,
      caption: 'Capturing moments 📸',
      comments: [
        { username: 'friend6', text: 'Great shot!' }
      ],
      timestamp: '1일 전'
    },
    {
      id: 5,
      username: 'wanderlust_soul',
      profileImage: '/man.png',
      image: '/img05.jpg',
      likes: 1892,
      caption: 'Life is a journey ✈️',
      comments: [
        { username: 'friend7', text: 'Beautiful!' },
        { username: 'friend8', text: 'Amazing photography!' }
      ],
      timestamp: '2일 전'
    },
    {
      id: 6,
      username: 'mountain_climber',
      profileImage: '/woman.png',
      image: '/img06.jpg',
      likes: 4567,
      caption: 'Reached the summit! 🏔️',
      comments: [
        { username: 'friend9', text: 'Congratulations!' },
        { username: 'friend10', text: 'Incredible achievement!' }
      ],
      timestamp: '2일 전'
    },
    {
      id: 7,
      username: 'ocean_dreamer',
      profileImage: '/man.png',
      image: '/img07.jpg',
      likes: 2789,
      caption: 'Ocean vibes 🌊',
      comments: [
        { username: 'friend11', text: 'So calming!' }
      ],
      timestamp: '3일 전'
    },
    {
      id: 8,
      username: 'sunset_chaser',
      profileImage: '/woman.png',
      image: '/img08.jpg',
      likes: 3124,
      caption: 'Golden hour magic ✨',
      comments: [
        { username: 'friend12', text: 'Stunning!' },
        { username: 'friend13', text: 'Perfect timing!' }
      ],
      timestamp: '3일 전'
    },
    {
      id: 9,
      username: 'wildlife_photographer',
      profileImage: '/man.png',
      image: '/img09.jpg',
      likes: 5234,
      caption: 'Nature at its finest 🦅',
      comments: [
        { username: 'friend14', text: 'Amazing capture!' }
      ],
      timestamp: '4일 전'
    },
    {
      id: 10,
      username: 'landscape_artist',
      profileImage: '/woman.png',
      image: '/img10.jpg',
      likes: 4123,
      caption: 'Painting with light 🎨',
      comments: [
        { username: 'friend15', text: 'Masterpiece!' },
        { username: 'friend16', text: 'Incredible work!' }
      ],
      timestamp: '4일 전'
    }
  ]

  return (
    <div className="feed">
      <div className="feed-container">
        {posts.map(post => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed



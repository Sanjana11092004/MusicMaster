// src/pages/messages/MessagesPage.jsx
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './MessagesPage.css';

const sampleMessages = [
  {
    id: 1,
    sender: 'Alex Johnson (Piano Instructor)',
    avatar: 'https://i.pravatar.cc/40?img=1',
    date: '2 days ago',
    text: 'Hi! Just checking if you’ve started the new piano exercises.',
    unread: true,
  },
  {
    id: 2,
    sender: 'Sarah Lee (Support)',
    avatar: 'https://i.pravatar.cc/40?img=2',
    date: '5 days ago',
    text: 'We noticed you haven’t logged in for a week. Need help?',
    unread: true,
  },
  {
    id: 3,
    sender: 'Emily Chen (Guitar Coach)',
    avatar: 'https://i.pravatar.cc/40?img=3',
    date: '1 week ago',
    text: 'Congrats on completing Module 3! Keep it up.',
    unread: true,
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(sampleMessages);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [filter, setFilter] = useState('Unread');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectMessage = (id) => {
    setSelectedMessageId(id);
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, unread: false } : msg
      )
    );
  };

  const filteredMessages = messages.filter((msg) => {
    if (filter === 'Unread' && !msg.unread) return false;
    if (
      searchQuery &&
      !msg.text.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !msg.sender.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const selectedMessage = messages.find(
    (msg) => msg.id === selectedMessageId
  );

  return (
    <>
      <Header />
      <h2 className="messages-title">Messages</h2>
      <div className="messages-container">
        <div className="messages-sidebar">
          <div className="messages-sidebar-header">
            <button className="compose-btn">Compose</button>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="Unread">Unread</option>
              <option value="All">All</option>
            </select>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="message-list">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className={`message-item ${
                  msg.id === selectedMessageId ? 'selected' : ''
                }`}
                onClick={() => handleSelectMessage(msg.id)}
              >
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="avatar"
                />
                <div className="message-info">
                  <div className="message-header">
                    <span className="sender">{msg.sender}</span>
                    <span className="message-timestamp">{msg.date}</span>
                  </div>
                  <div className="text-preview">{msg.text}</div>
                </div>
                {msg.unread && <span className="unread-dot"></span>}
              </div>
            ))}
            {filteredMessages.length === 0 && (
              <div className="no-messages">No messages found.</div>
            )}
          </div>
        </div>
        <div className="messages-content">
          {selectedMessage ? (
            <div className="message-detail">
              <h3>{selectedMessage.sender}</h3>
              <p>{selectedMessage.text}</p>
              <span className="detail-date">{selectedMessage.date}</span>
            </div>
          ) : (
            <div className="empty-state">
              Select a message thread to read it here.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

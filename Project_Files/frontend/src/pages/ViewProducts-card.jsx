import React, { useState } from "react";
import CountdownTimer from "../components/Timer.jsx";

function AuctionApp() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [ratings, setRatings] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [modalData, setModalData] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [bidAmount, setBidAmount] = useState(1000);

  // State for auction items
  const [items, setItems] = useState([
    {
      id: "ragdoll_cat",
      title: "Ragdoll Cat",
      startingBid: 100.00,
      soldPrice: "NULL",
      auctionEnd: 95,
      category: "Adventure",
      description: "The Ragdoll is a cat breed with blue eyes...",
      bidded_amount: 0,
    },
    {
      id: "rumours_remaster_fleet",
      title: "Rumours Remaster - Fleet",
      startingBid: 55.00,
      soldPrice: "NULL",
      auctionEnd: 12,
      category: "Music",
      description: "A remastered classic by Fleetwood Mac.",
      bidded_amount: 0,
    },
    {
      id: "creedence_clearwater",
      title: "Creedence Clearwater",
      startingBid: 75.00,
      soldPrice: "NULL",
      auctionEnd: 31,
      category: "Rock",
      description: "An album that captures the essence of CCR's music.",
      bidded_amount: 0,
    },
    {
      id: "21_cd_cover_LP_(12' album)_Adele",
      title: '21 CD Cover LP (12" album) - Adele',
      startingBid: 30.00,
      soldPrice: "NULL",
      auctionEnd: 32,
      category: "Pop",
      description:
        "Adele's critically acclaimed album in a special edition.",
      bidded_amount: 0,
    },
    {
      id: "the_beatles_abbey_road",
      title: "The Beatles - Abbey Road",
      startingBid: 150.00,
      soldPrice: "NULL",
      auctionEnd: 11,
      category: "Rock",
      description: "The iconic Abbey Road album by The Beatles.",
      bidded_amount: 0,
    },
    {
      id: "led_zeppelin_iv",
      title: "Led Zeppelin - IV",
      startingBid: 15.00,
      soldPrice: "NULL",
      auctionEnd: 10,
      category: "Rock",
      description:
        "A masterpiece from the legendary rock band Led Zeppelin.",
      bidded_amount: 0,
    },
    {
      id: "michael_jackson_thriller",
      title: "Michael Jackson - Thriller",
      startingBid: 200.00,
      soldPrice: "NULL",
      auctionEnd: 8,
      category: "Pop",
      description:
        "The record-breaking Thriller album by Michael Jackson.",
      bidded_amount: 0,
    },
    {
      id: "queen_greatest_hits",
      title: "Queen - Greatest Hits",
      startingBid: 90.00,
      soldPrice: "NULL",
      auctionEnd: 12,
      category: "Rock",
      description: "A collection of the greatest hits by Queen.",
      bidded_amount: 0,
    },
    {
      id: "eagles_hotel_california",
      title: "Eagles - Hotel California",
      startingBid: 130.00,
      soldPrice: "NULL",
      auctionEnd: 15,
      category: "Rock",
      description: "The timeless classic Hotel California by Eagles.",
      bidded_amount: 0,
    },
    {
      id: "nirvana_nevermind",
      title: "Nirvana - Nevermind",
      startingBid: 85.00,
      soldPrice: "NULL",
      auctionEnd: 35,
      category: "Rock",
      description: "The iconic Nirvana album that defined grunge music.",
      bidded_amount: 0,
    },
    {
      id: "bob_marley_legend",
      title: "Bob Marley - Legend",
      startingBid: 95.00,
      soldPrice: "NULL",
      auctionEnd: 40,
      category: "Reggae",
      description: "The ultimate greatest hits collection by Bob Marley.",
      bidded_amount: 0,
    },
    {
      id: "ac/dc_ack_in_black",
      title: "AC/DC - Back In Black",
      startingBid: 110.00,
      soldPrice: "NULL",
      auctionEnd: 33,
      category: "Rock",
      description:
        "AC/DC's legendary album that continues to define hard rock.",
      bidded_amount: 0,
    },
    {
      id: "david_bowie_the_rise_and_fall_of_ziggy_stardust",
      title: "David Bowie - The Rise and Fall of Ziggy Stardust",
      startingBid: 140.00,
      soldPrice: "NULL",
      auctionEnd: 37,
      category: "Rock",
      description:
        "The groundbreaking album by David Bowie, marking the birth of Ziggy Stardust.",
      bidded_amount: 0,
    },
    {
      id: "radiohead_ok_computer",
      title: "Radiohead - OK Computer",
      startingBid: 105.00,
      soldPrice: "NULL",
      auctionEnd: 36,
      category: "Alternative Rock",
      description:
        "One of the most influential albums of the 1990s by Radiohead.",
      bidded_amount: 0,
    },
  ]);
  // Function to reset the filters
  function resetFilters() {
    setSearch("");
    setPriceRange(0);
    setRatings("");
    setSelectedSort("");
  }

  // Function to open modal with auction details
  function openModal(itemId) {
    const selectedItem = items.find((item) => item.id === itemId);
    setModalData(selectedItem);
   }

  // Function to close modal
  function closeModal() {
    setModalData(null);
  }

  // Function to handle "Place Bid" click
  function handlePlaceBid() {
    setConfirmationVisible(true); // Show confirmation popup
  }

  // Function to handle "Yes" in confirmation
  function handleConfirmBid() {
    // Update the bidded_amount in the items array
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === modalData.id
          ? { ...item, bidded_amount: item.bidded_amount + item.startingBid }
          : item
      )
    );
    setConfirmationVisible(false);
    closeModal(); // Close modal after confirming the bid
 }

  // Function to handle "No" in confirmation
  function handleCancelBid() {
    setConfirmationVisible(false); // Close confirmation popup
  }

  return (
    <div className="container">
      {/* Filter Section */}
      <div className="filter-section" id="filter-form">
        <input
          type="text"
          placeholder="Search your Auction"
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h2>Filter the auctions</h2>
        <div className="dropdown-container">
          <div className="dropdown">
            <button className="dropbtn">
              Categories <span className="arrow-down">&#9660;</span>
            </button>
            <div className="dropdown-content">
              <div className="dropdown-item">
                Option 1 <span className="arrow-right">&#9654;</span>
                <div className="sub-dropdown">
                  <a href="#">Sub Option 1.1</a>
                  <a href="#">Sub Option 1.2</a>
                  <a href="#">Sub Option 1.3</a>
                </div>
              </div>
              <div className="dropdown-item">
                Option 2 <span className="arrow-right">&#9654;</span>
                <div className="sub-dropdown">
                  <a href="#">Sub Option 2.1</a>
                  <a href="#">Sub Option 2.2</a>
                  <a href="#">Sub Option 2.3</a>
                </div>
              </div>
              <div className="dropdown-item">
                Option 3 <span className="arrow-right">&#9654;</span>
                <div className="sub-dropdown">
                  <a href="#">Sub Option 3.1</a>
                  <a href="#">Sub Option 3.2</a>
                  <a href="#">Sub Option 3.3</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <label htmlFor="price-range">Price Range</label>
        <input
          className="range-slider"
          type="range"
          id="price-range"
          min="0"
          max="1000"
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />

        <label htmlFor="ratings">Ratings</label>
        <select
          id="ratings"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <h3>Sort By</h3>
        <label>
          <input
            type="radio"
            name="sort"
            value="recent"
            checked={selectedSort === "recent"}
            onChange={(e) => setSelectedSort(e.target.value)}
          />
          Recently Added
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="low-to-high"
            checked={selectedSort === "low-to-high"}
            onChange={(e) => setSelectedSort(e.target.value)}
          />
          Price: Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="high-to-low"
            checked={selectedSort === "high-to-low"}
            onChange={(e) => setSelectedSort(e.target.value)}
          />
          Price: High to Low
        </label>

        <button className="filter-button">Filter</button>
        <button className="reset-button" type="button" onClick={resetFilters}>
          Reset
        </button>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        {items.map((item) => (
           <div className="card" key={item.id}>
            <img src="https://via.placeholder.com/300x300" alt={item.title} />
            <h3>{item.title}</h3>
            <p>
              Starting bid: <strong>{"£"+item.startingBid}</strong>
            </p>
            <p>
              Expires on:{" "}
              <strong>
                <CountdownTimer
                  auctionId={item.id}
                  initialDays={item.auctionEnd}
                />
              </strong>
            </p>
            <button className="bid-now" onClick={() => openModal(item.id)}>
               Bid Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal show" id="buyNowModal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            <div className="modal-body">
              <img
                src="https://via.placeholder.com/900x400"
                alt="Product Image"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>{modalData.description}</p>
              <p>
                <strong>Starting Bid:</strong>{" "}
                <span>{modalData.startingBid}</span>
              </p>
              <p>
                <strong>Sold Price:</strong> <span>{modalData.soldPrice}</span>
              </p>
              <p>
                <strong>Bidded Amount:</strong>{" "}
                <span>{modalData.bidded_amount}</span>
              </p>
              {/* <p>
                <strong>Auction Starts:</strong>
                <span>{modalData.auctionStart}</span>
              </p> */}
              <p>
                <strong>Category:</strong> <span>{modalData.category}</span>
              </p>
            </div>
            <div className="modal-footer">
            <button className="bid-btn" onClick={handlePlaceBid}>
                Place Bid
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Confirmation Popup */}
      {confirmationVisible && (
        <div className="confirmation-popup">
          <div className="popup-content">
            <p>
              Are you sure you want to bid £<strong>{modalData?.startingBid}</strong> on{" "}
              <strong>{modalData?.title}</strong>?
            </p>
            <div className="popup-actions">
              <button className="yes-btn" onClick={handleConfirmBid}>
                Yes
              </button>
              <button className="no-btn" onClick={handleCancelBid}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuctionApp;


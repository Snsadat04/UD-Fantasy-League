document.getElementById("sync-btn").addEventListener("click", () => {
    const leagueID = document.getElementById("league-id").value;
    if (leagueID) {
      alert(`Fetching data for League ID: ${leagueID}`);
      // Here, integrate with Sleeper API to fetch league data
      // Example: Use fetch() to send requests to the API
    } else {
      alert("Please enter a valid League ID.");
    }
  });
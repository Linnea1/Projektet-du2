

// The functions in this file are ONLY FOR USEFUL FOR VG
// You do not need to understand how they work but you need to
// understand how they can be used.


function get_random_number (max, min = 0) {
  // Returns a random number between min (inclusive) and max (exclusive)
  return min + Math.floor( max * Math.random() );
}

function percenter (x, y) {
  // Returns the percentage of x in y
  // Example: percenter(9.5,10) returns 95, since 9.5 is 95% of 10.
  // Always returns a whole number (heltal)
  return Math.floor(100 * x / y);
}


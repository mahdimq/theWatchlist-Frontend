// Helper functions to help calculate the movie runtime
export const calculateTime = (time) => {
	const hours = Math.floor(time / 60);
	const mins = time % 60;
	return `${hours}h ${mins}m`;
};

// Helper function to calculate formatted date
export const formatDate = (date) => {
	// NEED TO ADD DATE FORMATTER IN HERE
	let d = new Date(date);
	return d.toDateString();
};

// Convert a number to money formatting
export const convertMoney = (money) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0
	});
	return formatter.format(money);
};

// webpack.config.js

module.exports = {
	// Other webpack configuration options...

	resolve: {
		fallback: {
			http: require.resolve('stream-http'), // Handle http module
			https: require.resolve('https-browserify'), // Handle https module
			url: require.resolve('url/'), // Handle url module
			util: require.resolve('util/') ,// Handle util module
			// Add more fallbacks if needed
			child_process: false, // Exclude child_process module
			fs: false
		}
	}
};

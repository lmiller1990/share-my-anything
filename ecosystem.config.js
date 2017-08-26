module.exports = {
	apps: [{
		name: 'share-my-anything',
		script: './lib/server/index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: 'ec2-52-201-254-43.compute-1.amazonaws.com',
			key: '~/.ssh/share-my-anything-production.pem',
			ref: 'origin/master',
			repo: 'git@github.com:lmiller1990/share-my-anything.git',
			path: '/home/ubuntu/share-my-anything',
			'post-deploy': 'yarn install && yarn prod:build && pm2 startOrRestart ecosystem.config.js'
		}
	}
}

// If you see this:

npm ERR! UpScore@0.6.0 start: `react-scripts start`
npm ERR! spawn ENOENT

// It just means something went wrong when dependencies were installed the first time.

// I suggest doing these three steps:


npm install -g npm@latest to update npm because it is sometimes buggy.
rm -rf node_modules to remove the existing modules.
npm install to re-install the project dependencies.

// This should fix the problem.
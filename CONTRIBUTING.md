
# Contribution Guide

Below are the instructions for making changes to simple-chat. There are a few important guidelines we'd wish for you to follow.
These will make it easier for you to contribute and for us to follow. Thank you for contributing!

## Getting Started

If you've found a bug and don't have a solution or have a feature request, please [create an issue](https://github.com/mbrandau/simple-chat/issues/new).

Ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/mbrandau/simple-chat/issues).

If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a title and clear description and as much relevant information as possible and follow these steps if you already have a solution:

1. [Fork](https://github.com/mbrandau/simple-chat/fork) the repository

2. Run `npm install && cd frontend && npm install` to install all required packages.

You can now change the things you want and test your changes.

## Testing your changes

1. Build the frontend. There are two ways to do this:  
   1. Call the following command (in main folder and not in `/frontend`) each time you want to test the app:
      ```bash
      $ npm run build
      ```
   2. Call the following command once. It'll watch the frontend files and automatically builds it when you make changes.
      ```bash
      $ npm run build-dev
      ```
2. Launch the server with the following command where `<PORT>` is the port the app should run on (leave `PORT=<PORT> ` out if you want it to run on port 80):
   ```bash
   $ PORT=<PORT> npm start
   ```


## Submitting your changes

:exclamation: **NOTE:** Please choose meaningful commit messages.

1. Push the changes to your forked repository.
2. [Create a pull request](https://github.com/mbrandau/simple-chat/compare) and choose a meaningful title and describe your changes in the description.
3. Wait for a review and make changes according to the reviews comments.

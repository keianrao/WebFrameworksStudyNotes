
This was entirely edited online in StackBlitz. I cannot run it locally since the versions it picks for its dependencies do not support my Node.js version in Debian. Angular CLI itself is among them.

Rush solutions are to install Nodesource's Node.js distribution (which provides all Node-related binaries, and conflicts with all existing Debian Node-related packages), or to run a rolling distro somewhere.

Proper solution is probably to setup an older version of Angular on my system, then try to run the app on it, probably removing all dependencies then individually adding them with an appropriate version. A controlled, though tedious, downgrade.

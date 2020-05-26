# Smart Home Systems

* This project is about integrating a light controller and a smart jar into a single controller. 

# Setting the Operating system for the LEGO EV3 brick

* Download the OS and boot it into a microSD card and insert it in the desired slot for the SD card. 
* Start the LEGO EV3 brick. Initially the boot time may be a little longer, but once the OS is installed, the boot time is reduced and comes back to the normal time.

# Setting up a Bluetooth connection of EV3 brick and the personal computer in a Linux Operating Systems.

* The default bluetooth manager with linux operating system does not establish a proper connection with the EV3 brick. Thus, a bluetooth manager package named Blueman is installed with the following commands. 

* For Debian System,
```
sudo apt-get install blueman
```
* For RPM System,
```
sudo dnf install blueman
```
* After Installing, run the blueman Bluetooth Manager. 
* Select on View > Local Services. In Local Services, go to Network. Tick the the Network Access Point(NAP) check box and select dnsmasq radio button. 
* Also change the IP address to 10.42.0.1
* On the ev3 make sure the bluetooth is turned on and is visible. 
* Back in the host computer, in the blueman window, select search to search the EV3. Once EV3 is visible, select pair to pair the device with the host computer. Once Paired, mark it as favourite ( the star button) to make sure that the EV3 is connected to the host computer everytime both are switched on. 
* In the brickman, select Wireless and Networks > All Network Connections and select connect to connect the EV3 to the host computer. 
Once the Connect is pressed, the state should change to Connected. 

## Establishing an SSH connection with the EV3 brick.

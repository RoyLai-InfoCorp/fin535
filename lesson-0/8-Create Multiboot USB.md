# Create Multiboot

## NOTE: How to enter BIOS mode from Windows 10

- WIN + S
- Enter "Recovery Options"
- Advanced startup > "Restart now"
- From Windows Recovery Environment:
  - Troubleshoot
  - Advanced options
  - UEFI Firmware Settings
  - Restart
- You should be in BIOS configuration screen.

---

## Create Multiboot USB

### Step 1: Download Yumi exFAT

https://www.techspot.com/downloads/6171-yumi.html#:~:text=YUMI%20lets%20you%20create%20a,%2C%20diagnostic%20tools%2C%20and%20more.

### Step 2: Install Yumi on USB

1. Run "Yumi.exe".
2. Select USB drive eg. F: This will format the USB drive with exFAT.
3. Select a Distro to put on F:
    - Windows 10 Installer ISO from Dropbox/Installer
4. Create. This will install the distro into the USB.

---

## Create barebone Windows 10 image with latest updates

### Step 1: Install Windows 10 from USB

- Make sure BIOS is set to **UEFI only** and boot YUMI from USB.
- Select Custom install and delete all partitions to use GPT partition.
- Check and apply all updates.
- First restart should be around 1.5 hour from time of update and restart should complete in 30 min.
- Login and check updates again. The 20H2 update should restart in around 2 hours and complete in 30 min.
- Run final check updates.

### Step 2: Remove windows.old and temp files

- WIN + S
- Enter "Storage Settings"
- Temporary files > Select all and remove.

### Step 3: Shrink Partition

- WIN + S
- Enter "Disk management"
- Select c: and shrink volume to minimum

### Step 4: Boot **Clonezilla** from 64 GB USB

- Boot to RAM
- Select Disk to Image: **device-image**
- Where will image be size: **local_dev**
- **Remove and insert** the USB and press "ENTER" to continue
- CTRL-C to exit detect drive
- Mount USB drive as /home/partimag: **sdc1**
- Run in Expert mode.
- Save Local Disk as Image
- parameters: **-c -j2**
- Select drive C : **sda**
- Select priority: **-q2**
- Options: default
- Compression: **-z9p**
- partition split size : 0

NOTE:
- The clone command can be entered directly as /usr/sbin/ocs-sr -q2 -c -j2 -z9p -i 0 -sfsck -senc -p choose savedisk 2022-08-04-01-img sda
- It is saved under /tmp/ocs-2022-08-04-01-img-2022-08-04-02-03
- If an error is thrown because Clonezilla detected both MBR and GPT that means Windows10 was not installed correctly. Reinstall and make sure BIOS is set to boot from UEFI.

---

## Clone a new laptop with Windows 10 image
https://clonezilla.org/clonezilla-usage/general-live-use.php

### Step 1: Set BIOS to boot from USB

- Boot Mode: **UEFI only**.
- Secure Boot: **Disabled**
- Boot Order: **Boot from USB first**

### Step 2a: Clone the laptop using Wizard

- Boot laptop from USB
- YUMI > System-Tools > clonezilla
- **Clonezilla with large fonts to RAM** (3rd option)
- Language: **Enter**
- Keyboard Layout: **Enter**
- **Start Clonezilla**
- Clonezilla mode: **device-image**
- Read from: **local_dev**
- **Remove and insert** usb. Press "ENTER"
- Detecting USB... **CTRL-C**
- Mount drive as /home/partimag: **sdc1**
- **no-fsck**
- Image: **Aug_4_CZ_IMG**
  - NOTE: Move to image with arrow key and tab to <DONE> then press ENTER.
- **ENTER**
- Wizard: **Beginner**
- Mode: **restoredisk**
- Choose image file: **ENTER**
- Choose target disk: **sda**
- Check Image: **no**
- Finshed action: **-p choose**

NOTE: /usr/sbin/ocs-sr -g auto -e1 auto -e2 -r -j2 -c -k0 -scr -p choose restoredisk 2022-08-04-07-img sda

### OR

### Step 2b: Clone the laptop from command line

- Boot laptop from USB
- YUMI > System-Tools > clonezilla
- **Clonezilla with large fonts to RAM** (3rd option)
- Language: **Enter**
- Keyboard Layout: **Enter**
- **Enter command line prompt**
- **Remove and insert** USB
- Enter the command:
  
    ```sh
    $ sudo su -
    $ mount -t auto /dev/sdc1 /home/partimag
    $ /usr/sbin/ocs-sr -g auto -e1 auto -e2 -r -j2 -k0 -scr -p choose restoredisk 2022-08-04-07-img sda
    ```

---
## Install ESET SysRescue Live

1. Step 1: Download https://www.eset.com/sg/support/sysrescue/#download iso file.
2. Step 2: Run YUMI.exe from USB
3. Step 3: Select a Distribution to put on F:
    - Antivirus: ESET SysRescue Live
4. Step 4: Install

## Install GParted

1. Step 1: Download https://gparted.org/download.php iso file.
2. Step 2: Run YUMI.exe from USB
3. Step 3: Select a Distribution to put on F:
    - Tools: GPartEd
4. Step 4: Install

# Windows 11

## Create Windows 11 ISO using Windows 11 Media Creator

1. Download https://www.techspot.com/downloads/7437-windows-11-installation-tool.html and run Windows 11 Media Creator on ROYLAI_PC
2. Choose which media to use : ISO file
3. Create


# Install Ubuntu in WSL

## Reference:

<https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps>
<https://docs.microsoft.com/en-us/windows/wsl/setup/environment>
https://s1gr1d.medium.com/how-to-set-up-linux-on-windows-with-wsl-2-debe2a64d20d
https://evidencen.com/wsl2/

## Video:

- https://youtu.be/pkD2S08ra70

## Instructions:

1. If you are running **Windows 11**, skip to **Step 3**.

2. If you are running **Windows 10**:

   a. check the current build by opening Windows Search and type **winver** followed by Enter.

   b. This will popup the About Windows dialog. Check the Build number:
      - For x64 systems: **Version 1903** or higher, with **Build 18362** or higher.
      - For ARM64 systems: **Version 2004** or higher, with **Build 19041** or higher.
      If the OS Build is less than required, run Windows Update to the latest build by selecting **Start > Settings > Windows Update > Check for Updates**.

   c. If the OS Build is latest, proceed to **Step 3**

3. Check if your system meets the requirements:
   
   a. Open Command Prompt and enter "systeminfo"
      It should display:

      ```sh
      Hyper-V Requirements:   VM Monitor Mode Extensions: Yes
                              Virtualization Enabled in Firmware: Yes
                              Second Level Address Translation: Yes
                              Data Execution Prevention Available: Yes
      ```

   b. If **Virtualization Enabled in Firware: No**, then enable virtualization in your BIOS:

      1. Boot into BIOS for your motherboard.
      2. Look for the settings to enable virtualization. It is usually called VT-x, AMD-V, SVM, Intel VT-d or AMD IOMMU.
      3. Save BIOS changes and reboot

4. Turn Windows Features on

   Open Windows Features dialog and select `Windows Subsystem for Linux` and `Virtual Machine Platform` check boxes.

   OR

   Open **Command Prompt as Administrator** and run the following

   ```powershell
   $ dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   $ dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```

   **NOTE:** VirtualMachinePlatform is a subset of Hypervisor and is available on Windows Home Edition. There is no need to install Hyper-V Hypervisor as it will require Windows Professional.

6. Restart machine.

7. Download and install [Linux kernel](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).

8.  Enter the following in terminal

   ```powershell
   $ wsl --set-default-version 2
   ```

- Open Microsoft Store and install Ubuntu 20.04
- Click 'Launch'

- Launch and set username & password.

<!--Title Image-->
![images/gifs/myphonelist_desktop.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_desktop.gif?raw=true)
# :computer: MyPhoneList - Website 
  <p>
  MyPhoneList is a website to manage your phone numbers in a list.<br>
  You can add and remove contacst from your list.
  </p>

<!--Menu-->
## :large_orange_diamond: Table of Content
- [1. Features](#large_orange_diamond-features)
  - [1.1 Adding Contacts](#arrow_forward-adding-contacts)
  - [1.2 Removing Contacts](#arrow_forward-removing-contacts)
  - [1.3 Confirmation Dialog Box](#arrow_forward-confirmation-dialog-box)
  - [1.4 Duplicated Phone Numbers](#arrow_forward-duplicated-phone-numbers)
  - [1.5 Responsiveness](#arrow_forward-responsiveness)
    - [1.5.1 Mobile](#small_red_triangle_down-mobile)
    - [1.5.2 Tablet](#small_red_triangle_down-tablet)
    - [1.5.3 Desktop](#small_red_triangle_down-desktop)
- [2. Patch Notes](#large_orange_diamond-patch-notes)
  - [2.1 Latest Update](#pushpin-latest-update)
  - [2.2 Future Updates](#bookmark_tabs-future-updates)
- [3. Tools and Technologies](#large_orange_diamond-tools-and-technologies) 
  - [3.1 Stacks Used](#arrow_forward-stacks-used)
  - [3.2 Libraries](#arrow_forward-libraries)
  - [3.3 Plugins](#arrow_forward-plugins)
- [4. Result](#large_orange_diamond-result)
  - [4.1 Deploy on Vercel](#arrow_forward-deploy-on-vercel)
- [5. Etcetera](#large_orange_diamond-etcetera)
  - [5.1 About](#arrow_forward-about)
  - [5.2 Licenses](#arrow_forward-licenses)

<!--Features-->
## :large_orange_diamond: Features
### :arrow_forward: Adding Contacts
![images/gifs/myphonelist_adicionar.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_adicionar.gif?raw=true)
<p>
You can add
</p>

### :arrow_forward: Removing Contacts
![images/gifs/myphonelist_remover.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_remover.gif?raw=true)
<p>
You can remove any contact by clicking the trash bin icon besides the contact phone number, 
and then clicking the confirmation prompt in the dialog box.
</p>

### :arrow_forward: Confirmation Dialog Box
![images/gifs/myphonelist_dialog_box.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_dialog_box.gif?raw=true)
<p>
When trying to delete a contact, you will be prompted with a confirmation dialog box made with JQuery UI.<br>
Confirmation will lead to a permanent exclusion of the contact on the list.
</p>

### :arrow_forward: Duplicated Phone Numbers
![images/gifs/myphonelist_repetido_1.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_repetido_1.gif?raw=true)
<p>
If you try to add a phone number that already exists, 
the website will alert you that the typed number already belongs to the contacts list and you won't be able to add the duplicate.
</p>

![images/gifs/myphonelist_repetido_2.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_repetido_2.gif?raw=true)
<p>
You can, however, add the number if you delete the previous contact that had it in your contacts list.
</p>

### :arrow_forward: Responsiveness
<p>
The website have a set of breakpoints of media queries to add responsiveness for the user. 
The main breakpoints are for Desktop, Tablet and Mobile.  
</p>

#### :small_red_triangle_down: Mobile
![images/gifs/myphonelist_celular.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_celular.gif?raw=true)
<p>- Mobile Breakpoint</p>

#### :small_red_triangle_down: Tablet
![images/gifs/myphonelist_tablet.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_tablet.gif?raw=true)
<p>- Tablet Breakpoint</p>

#### :small_red_triangle_down: Desktop
![images/gifs/myphonelist_desktop.gif](https://github.com/jeanjusten/My_Phone_List/blob/main/images/gifs/myphonelist_desktop.gif?raw=true)
<p>- Desktop Breakpoint</p>

<!--Updates-->
## :large_orange_diamond: Patch Notes
### :pushpin: Latest Update
<strong>27/06/2024</strong>
- Fixed a bug where the user could not add the same number after deleting it once.

### :bookmark_tabs: Future Updates
<p>
Here stand my planned updates for this website:

- Add a Login system and saving user list info.
- More user customization options.
</p>

####

<!--Tools Used-->
## :large_orange_diamond: Tools and Technologies
### :arrow_forward: Stacks Used
[![My Skills](https://skillicons.dev/icons?i=html,css,js,jquery)](https://skillicons.dev)
### :arrow_forward: Libraries
* <a href="https://jquery.com/" alt="Visit JQuery documentation">JQuery</a>
* <a href="https://jqueryui.com/" alt="Visit JQuery UI documentation">JQuery UI</a>

### :arrow_forward: Plugins
<p>
MyPhoneList website uses a Jquery Mask plugin to guarantee the phone number in the field is in a pre-determined format. In this case, the format is: "(00) 00000-0000".<br>
The other plugin used is a JQuery Validation that ensures that the user can only type numbers in the phone number field.
</p>

* <a href="https://igorescobar.github.io/jQuery-Mask-Plugin/">JQuery Mask Plugin</a> <br>
* <a href="https://jqueryvalidation.org/">JQuery Validation Plugin</a>

<!--Deploy-->
## :large_orange_diamond: Result
### :arrow_forward: Deploy on Vercel 
* <a href="https://my-phone-list-flame.vercel.app/" alt="See the page live on Vercel now">MyPhoneList - Website on Vercel</a>

<!--Etcetera-->
## :large_orange_diamond: Etcetera
### :arrow_forward: About
<p>
  This is a study project with the objective:
  
  - Train Javascript functions and managing elements from arrays 
  like adding, removing and updating.

  - Use masks to validate the contacts' phone numbers.
</p>

### :arrow_forward: Licenses
<p>
  You may use, copy, share and modify the code as you please. No credits needed.
</p>

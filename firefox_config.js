// Firefox Config about:config
// Created by David Tran (unsignedzer)
// Version 0.1.0.0
// Last Modified: 2015-05-11_19:27:16
//
// Below is a list of config information that I use and pulled out of
// my Firefox. This can be copied into prefs.js directly.
// Edit and fork as needed.

// Disables animations in Firefox.
user_perf("browser.tabs.animate", false);
user_perf("browser.panorama.animate\_zoom", false);
user_perf("browser.fullscreen.animateUp", 0);

// Ctrl+Tab brings up preview of all tabs, similar to Alt+Tab for Windows 7
user_perf("browser.ctrlTab.previews", true);

// Makes Firefox's spellcheck apply to all text boxes.
user_perf("layout.spellcheckDefault", 2);

// Changes the style used to show that some word is misspelled
user_perf("ui.SpellCheckerUnderlineStyle", 4);

// Removing warning about editing about:config
user_perf("general.warnOnAboutConfig", false);

// UTF-8 as default encoding
user_perf("intl.charset.default", "UTF-8");

// Scripts have less time to run before we can prompt to kill it
user_perf("dom.max_script_run_time", 5);
user_perf("dom.max_chrome_script_run_time", 5);

// Disable New Tab Cruft
user_perf("browser.newtabpage.enabled", false);
user_perf("browser.newtabpage.enhanced", false);

// We've seen our rights...
user_perf("browser.rights.3.shown", true);

// This can be both good and bad depending on your setup
user_perf("browser.shell.checkDefaultBrowser", false);

// URL Bar is both URL and search like Chrome
user_perf("browser.urlbar.default.behavior", 2);

// Full URLs please
user_perf("browser.urlbar.trimURLs", false);

// Don't start media when loading
user_perf("media.autoplay.enabled", false);

// Fonts should be somewhat readable
user_perf("font.minimum-size.x-western", 9);
user_perf("font.minimum-size.zh-CN", 16);
user_perf("font.minimum-size.zh-HK", 16);
user_perf("font.minimum-size.zh-TW", 16);
user_perf("font.size.fixed.x-western", 12);
user_perf("font.size.variable.x-western", 14);

// I wanted firefox (a browser) not seamonkey(all-in-one)
// Don't need hello im client
// https://wiki.mozilla.org/Loop/Load_Handling
user_perf("loop.enabled", false);

// http://kb.mozillazine.org/Network.cookie.cookieBehavior
// Only cookies from the originating server are allowed.
user_perf("network.cookie.cookieBehavior", 1);

// http://kb.mozillazine.org/Network.cookie.prefsMigrated
// Don't need warnings here about deprecation. What could go wrong?
user_perf("network.cookie.prefsMigrated", true);

// https://mike.kaply.com/2014/10/22/disabling-buttons-in-preferences/
// Don't disable anything

// Advanced->General->Make Firefox the default browser
user_perf("pref.general.disable_button.default_browser", false);
// General->Use Current Pages
user_perf("pref.browser.homepage.disable_button.current_page", false);
// General->Use Bookmark
user_perf("pref.browser.homepage.disable_button.bookmark_page", false);
// General->Restore to Default
user_perf("pref.browser.homepage.disable_button.restore_default", false);
// Advanced->Certificates->View Certificates
user_perf("security.disable_button.openCertManager", false);
// Advanced->Certificates->Security Devices
user_perf("security.disable_button.openDeviceManager", false);
// Advanced->Update->Show Update History
user_perf("app.update.disable_button.showUpdateHistory", false);
// Privacy->History->Exceptions
user_perf("pref.privacy.disable_button.cookie_exceptions", false);
// Privacy->History->Show Cookies
user_perf("pref.privacy.disable_button.view_cookies", false);
// Security->Passwords->Saved Paswords
user_perf("pref.privacy.disable_button.view_passwords", false);
// Security->Passwords->Exceptions
user_perf("pref.privacy.disable_button.view_passwords_exceptions", false);
// It prevents the changing of any actions on the Applications page in preferences.
user_perf("pref.downloads.disable_button.edit_actions.", false);

// Change site settings
user_perf("privacy.cpd.siteSettings", false);

// No sync
user_perf("services.sync.nextSync", 0);


---
title: Themes
---

As of Kavita v0.5.2 you can now upload a .css file for custom theming.

There are a few things to note:
- The filename must only contain characters, numbers, and `-`
- The filename must match the top level css property
- The file must be .css

So for instance if we created `test-theme-123` then .css file should be structured as follows
``` 
:root .bg-test-theme-123 {
	/* CSS Variables here */
  } 
  ```
  
  Here is a list of all the CSS variables available to override:
  **Color-scheme** - refers to scroll bar colors as well as which color placeholder images to use.  
    --color-scheme: dark/light;  
    --primary-color: #4ac694;  
    --primary-color-dark-shade: #3B9E76;  
    --primary-color-darker-shade: #338A67;  
    --primary-color-darkest-shade: #25624A;  
    --error-color: #BD362F;  
    --bs-body-bg: #343a40;   
    --body-text-color: #efefef;  
    --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);  
  
    /* Navbar */
    --navbar-bg-color: black;
    --navbar-text-color: white;
    --navbar-fa-icon-color: white;
  
    /* Inputs */
    --input-bg-color: #343a40;
    --input-bg-readonly-color: #434648;
    --input-focused-border-color: #ccc;
    --input-text-color: #fff;
    --input-placeholder-color: #aeaeae;
    --input-border-color: #ccc;
  
    /* Buttons */
    --btn-primary-text-color: white;
    --btn-primary-bg-color: var(--primary-color-darker-shade);
    --btn-primary-border-color: var(--primary-color-darker-shade);
    --btn-primary-hover-text-color: white;
    --btn-primary-hover-bg-color: var(--primary-color-darkest-shade);
    --btn-primary-hover-border-color: var(--primary-color-darkest-shade);
    --btn-alt-bg-color: #424c72;
    --btn-alt-border-color: #444f75;
    --btn-alt-hover-bg-color: #3b4466;
    --btn-alt-focus-bg-color: #343c59;
    --btn-alt-focus-boxshadow-color: rgb(68 79 117 / 50%);
    --btn-fa-icon-color: white;
    --btn-disabled-bg-color: #343a40;
    --btn-disabled-text-color: white;
    --btn-disabled-border-color: #6c757d;
  
    /* Nav */
    --nav-tab-border-color: rgba(44, 118, 88, 0.7);
    --nav-tab-text-color: var(--body-text-color);
    --nav-tab-bg-color: var(--bs-body-bg);
    --nav-tab-hover-border-color: var(--primary-color-dark-shade);
    --nav-tab-active-text-color: white;
    --nav-link-bg-color: var(--primary-color-dark-shade);
    --nav-link-active-text-color: white;
    --nav-link-text-color: white;
    --nav-tab-hover-text-color: var(--body-text-color);
    --nav-tab-hover-bg-color: var(--primary-color-dark-shade);
    --nav-tab-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-border-bottom: var(--bs-body-bg);
    --nav-tab-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-border-hover-top: var(--primary-color-dark-shade);
    --nav-tab-border-hover-left: var(--primary-color-dark-shade);
    --nav-tab-border-hover-bottom: rgba(44, 118, 88, 0.7);
    --nav-tab-border-hover-right: var(--primary-color-dark-shade);
  
  
    /* Toasts */
    --toast-success-bg-color: rgba(59, 158, 118, 0.9);
    --toast-error-bg-color: #BD362F;
    --toast-info-bg-color: #2F96B4;
    --toast-warning-bg-color: #F89406;
  
    /* Checkboxes */
    --checkbox-checked-bg-color: var(--primary-color);
    --checkbox-border-color: var(--input-focused-border-color);
    --checkbox-focus-border-color: var(--primary-color);
  
    /* Tag Badge */
    --tagbadge-border-color: rgba(239, 239, 239, 0.125);
    --tagbadge-text-color: var(--body-text-color);
    --tagbadge-bg-color: var(--nav-tab-hover-bg-color);
  
    /* List items */
    --list-group-item-text-color: var(--body-text-color); /*rgba(74, 198, 148, 0.9)*/
    --list-group-item-bg-color: #343a40;
    --list-group-item-border-color: rgba(239, 239, 239, 0.125);
    --list-group-hover-text-color: white;
    --list-group-hover-bg-color: var(--accordion-body-bg-color);
  
    /* Popover */
    --popover-body-bg-color: var(--navbar-bg-color);
    --popover-body-text-color: var(--navbar-text-color);
  
    /* Pagination */
    --pagination-active-link-border-color: var(--primary-color);
    --pagination-active-link-bg-color: var(--primary-color);
    --pagination-active-link-text-color: white;
    --pagination-link-border-color: rgba(239, 239, 239, 0.125);
    --pagination-link-text-color: var(--primary-color);
    --pagination-link-bg-color: rgba(1, 4, 9, 0.5);
    --pagination-focus-border-color: var(--primary-color);
  
    /* Dropdown */
    --dropdown-item-hover-text-color: white;
    --dropdown-item-hover-bg-color: var(--primary-color-dark-shade);
    --dropdown-item-text-color: var(--navbar-text-color);
    --dropdown-item-bg-color: var(--navbar-bg-color);
    --dropdown-overlay-color: rgba(0,0,0,0.5);
  
    /* Accordion */
    --accordion-header-text-color: rgba(74, 198, 148, 0.9);
    --accordion-header-bg-color: rgba(52, 60, 70, 0.5); /* This is a good accent color */
    --accordion-body-bg-color: rgba(22,27,34,0.5);
    --accordion-body-border-color: rgba(239, 239, 239, 0.125);
    --accordion-body-text-color: var(--body-text-color);
    --accordion-header-collapsed-text-color: rgba(74, 198, 148, 0.9);
    --accordion-header-collapsed-bg-color: rgba(22,27,34,0.5);
  
    /* Breadcrumb */
    --breadcrumb-bg-color: #292d32;
    --breadcrumb-item-text-color: var(--body-text-color);
  
    /* Rating star */
    --ratingstar-color: white;
    --ratingstar-star-empty: #b0c4de;
    --ratingstar-star-filled: var(--primary-color);
  
    /* Global */
    --hr-color: rgba(239, 239, 239, 0.125);
    --accent-bg-color: rgba(1, 4, 9, 0.5);
    --accent-text-color: lightgrey;
    --grid-breakpoints-xs: $grid-breakpoint-xs;
    --grid-breakpoints-sm: $grid-breakpoint-sm;
    --grid-breakpoints-md: $grid-breakpoint-md;
    --grid-breakpoints-lg: $grid-breakpoint-lg;
    --grid-breakpoints-xl: $grid-breakpoint-xl;
    --body-font-family: "EBGaramond", "Helvetica Neue", sans-serif;
    --brand-font-family: "Spartan", sans-serif;
  
    /* Card */
    --card-bg-color: rgba(22,27,34,0.5);
    --card-text-color: var(--body-text-color);
    --card-border-color: rgba(239, 239, 239, 0.125);
    --card-progress-bar-color: var(--primary-color);
    --card-overlay-hover-bg-color: rgba(0, 0, 0, 0.2);
  
    /* Slider */
    --slider-text-color: white;
  
    /* Manga Reader */
    --manga-reader-overlay-filter: blur(10px);
    --manga-reader-overlay-bg-color: rgba(0,0,0,0.5);
    --manga-reader-overlay-text-color: white;
    --manga-reader-bg-color: black;
    --manga-reader-next-highlight-bg-color: rgba(65, 225, 100, 0.5);
    --manga-reader-prev-highlight-bg-color: rgba(65, 105, 225, 0.5);
    
    /* Radios */
    --radio-accent-color: var(--primary-color);
    --radio-hover-accent-color: var(--primary-color-dark-shade);
	
	--carousel-header-text-color: white;

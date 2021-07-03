window.nextgenEditor.addShortcode('u', {
  type: 'inline',
  plugin: 'shortcode-core',
  title: 'Underline',
  button: {
    group: 'shortcode-core',
    label: 'Underline',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.5 21.248h-21a1.25 1.25 0 000 2.5h21a1.25 1.25 0 000-2.5zM1.978 2.748h1.363a.25.25 0 01.25.25v8.523a8.409 8.409 0 0016.818 0V3a.25.25 0 01.25-.25h1.363a1.25 1.25 0 000-2.5H16.3a1.25 1.25 0 000 2.5h1.363a.25.25 0 01.25.25v8.523a5.909 5.909 0 01-11.818 0V3a.25.25 0 01.25-.25H7.7a1.25 1.25 0 100-2.5H1.978a1.25 1.25 0 000 2.5z"/></svg>',
  },
  content() {
    return '<span style="text-decoration:underline">{{content_editable}}</span>';
  },
});

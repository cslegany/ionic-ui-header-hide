# ionic-ui-header-hide

Based on: https://www.youtube.com/watch?v=NHTpZV-Dcw4

ionic start ionic-hideheader blank --type=angular --capacitor
cd ./ionic-hideheader

ionic g module directives/sharedDirectives --flat
ionic g directive directives/HideHeader
ionic g directive directives/FadeHeader
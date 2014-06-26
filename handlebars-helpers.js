/*globals Handlebars, moment */

(function() {
  // Get the current url
  Handlebars.registerHelper('windowLocation', function(place_id) {
    return window.location;
  });

  // Change new lines to <br> tags. This one is better than Swag.
  Handlebars.registerHelper('nlToBr', function(str) {
    if (str) {
      str = Handlebars.Utils.escapeExpression(str);
      return new Handlebars.SafeString(str.replace(/\r?\n|\r/g, '<br>'));
    } else {
      return str;
    }
  });

  // Date and time ------------------------------------------------------------
  Handlebars.registerHelper('formatDateTime', function(datetime, format) {
    if (datetime) {
      return moment(datetime).format(format);
    }
    return '';
  });

  Handlebars.registerHelper('fromNow', function(datetime) {
    if (datetime) {
      return moment(datetime).fromNow();
    }
    return '';
  });

}());
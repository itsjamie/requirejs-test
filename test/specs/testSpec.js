"use strict";
require(['library-name/library-name'], function(lib) {
  describe('Will this work?', function() {
    it('should be defined', function() {
      expect(lib).toBeDefined();
    });
    it('returns an array of even numbers', function() {
      for (var i = 0; i < lib.even.length; i++) {
        expect(lib.even[i] % 2).toBe(0);
      }
    });
  });
});
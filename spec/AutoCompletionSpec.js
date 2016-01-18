var AutoCompletion = require('../lib/AutoCompletion');


describe("AutoCompletion", function() {
	// Stub/Mock
	var fetchSuggestions;
	
	// Mock
	var displaySuggestions;
	
	// Unit of Work
	var sut;
	
	var suggestions = ['item'];
	
	beforeEach(function(){
		fetchSuggestions = jasmine.createSpy('fetchSuggestions').and.callFake(function(phrase,callback){
				callback(suggestions);				
		});
		displaySuggestions = jasmine.createSpy('displaySuggestions');
		sut = new AutoCompletion(fetchSuggestions,displaySuggestions);
	});
/*
	it('should fetch Suggestions for search phrase', function(){
		sut.search('phrase');
		expect(fetchSuggestions).toHaveBeenCalledWith('phrase');		
	});

    it('should display fetched suggestions.', function(){
		sut.search('phrase');
		expect(displaySuggestions.toHaveBeenCalledWith(suggestions);
    });
    
	it('should not fetch Suggestions for search phrase with less then 3 characters', function(){
		sut.search('ph');
		expect(fetchSuggestions).not.toHaveBeenCalled();		
	});
*/
});
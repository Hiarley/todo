package todo


import grails.rest.*
import grails.converters.*

class TodoController {
	static responseFormats = ['json', 'xml']
	static scaffold = Todo	
  //  def index() { }
}

/**
 * Created with JetBrains PhpStorm.
 * User: dbartuschat
 * Date: 20.12.13
 * Time: 12:19
 * To change this template use File | Settings | File Templates.
 */
/*1 Step pläne ziehen*/

function getPlanOverview(){
	/*ajax kram*/

	/*callback.call();*/
	$.ajax({
		type: 'POST',
		url: 'php/data.php',
		data: {'param' : 'plan'},
		dataType: 'json',
		success: function(data) {
			console.log(data);
			for(i=0; i < data.length; i++){
				addElement(data[i].id, data[i].name);

			}
		}
	});
}

function insertValue(value, element){
	$.ajax({
		type: 'POST',
		url: 'php/data.php',
		data: {'param' : 'Plan',
				'value' : value},
		dataType: 'json',

		success: function(data) {
			$(element).parent().remove();
			for(i=0; i < data.length; i++){
				addElement(data[i]);
			}
		}
	});
}

function getElement(element){
	var id = $(element).data('id');
	$.ajax({
		type: 'POST',
		url: 'php/data.php',
		data: {'param' : 'exc',
			'id' : id},
		dataType: 'json',

		success: function(data) {
			for(i=0; i < data.length; i++){
				addElement(data[i].value);
			}
		}
	});
}
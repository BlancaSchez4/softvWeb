'use strict';

function BuscaContratoLCtrl($uibModalInstance, atencionFactory, $rootScope) {
	function cancel() {
		$uibModalInstance.dismiss('cancel');
	}
	this.$onInit = function() {
		var obje = {};
		obje.servicio = 3;
		obje.op = 3;
		obje.colonia = 0;
		atencionFactory.buscarCliente(obje).then(function(data) {
			vm.Clientes = data.GetuspBuscaContratoSeparado2ListResult;
			console.log(vm.Clientes);
		});
	}

	function BusquedaporContrato() {
		var obje = {};
		obje.contrato = vm.BUcontrato;
		obje.servicio = 3;
		obje.colonia = 0;
		obje.op = 0;
		atencionFactory.buscarCliente(obje).then(function(data) {
			vm.Clientes = data.GetuspBuscaContratoSeparado2ListResult;
		});
	}

	function BusquedaporNombre() {
		var obje = {};
		obje.nombre = vm.BUnombre;
		obje.paterno = vm.BUapaterno;
		obje.materno = vm.BUamaterno;
		obje.colonia = 0;
		obje.servicio = 3;
		obje.op = 1;
		atencionFactory.buscarCliente(obje).then(function(data) {
			vm.Clientes = data.GetuspBuscaContratoSeparado2ListResult;
		});
	}


	function Seleccionar(contrato) {
		$uibModalInstance.dismiss('cancel');
		$rootScope.$emit('agregar_contrato', contrato);
	}

	function cancel() {
		$uibModalInstance.dismiss('cancel');
	}

	var vm = this;
	vm.cancel = cancel;
	vm.Seleccionar = Seleccionar;
	vm.BusquedaporNombre = BusquedaporNombre;
	vm.BusquedaporContrato = BusquedaporContrato;
}
angular.module('softvApp').controller('BuscaContratoLCtrl', BuscaContratoLCtrl);

define(['ojs/ojcore',
    'knockout',
    'jquery',
    'ojs/ojrouter',
    'ojs/ojknockout',
    'ojs/ojmodel',
    'ojs/ojarraytabledatasource',
    'promise',
    'ojs/ojtable',
    'ojs/ojnavigationlist'
], function (oj, ko, $) {

    var DeptDataTable,
        EmpDataTable;

    /**
     * DataTable object for static content.
     * The contract is to provide 2 methods: getColumns and getDataSource.
     */
    function DataTable(columnsArray, dataArray, idAttribute) {
        var dataSource = new oj.ArrayTableDataSource(dataArray, {idAttribute: idAttribute});

        return {
            getColumns: function () {
                return columnsArray;
            },

            getDataSource: function () {
                return dataSource;
            }
        };
    };

    function createDataTables() {
        DeptDataTable = new DataTable([
            {headerText: 'Id', field: 'id'},
            {headerText: 'Name', field: 'name'},
            {headerText: 'Location', field: 'loc'}
        ], [
            {id: 10, name: 'Accounting', loc: 'New York'},
            {id: 20, name: 'Research', loc: 'Dallas'},
            {id: 30, name: 'Sales', loc: 'Chicago'},
            {id: 40, name: 'Operations', loc: 'Boston'}
        ], 'id');

        EmpDataTable = new DataTable([
            {headerText: 'Id', field: 'id'},
            {headerText: 'Name', field: 'name'},
            {headerText: 'Job', field: 'job'},
            {headerText: 'Salary', field: 'sal'},
            {headerText: 'Dept', field: 'deptno'}
        ], [
            {id: 7369, name: 'Smith', job: 'Clerk', sal: 800, deptno: 20},
            {id: 7499, name: 'Allen', job: 'Salesman', sal: 1600, deptno: 30},
            {id: 7521, name: 'Ward', job: 'Salesman', sal: 1250, deptno: 30},
            {id: 7566, name: 'Jones', job: 'Manager', sal: 2975, deptno: 20},
            {id: 7654, name: 'Martin', job: 'Salesman', sal: 1250, deptno: 30},
            {id: 7698, name: 'Blake', job: 'Manager', sal: 2850, deptno: 30},
            {id: 7782, name: 'Clark', job: 'Manager', sal: 2450, deptno: 10},
            {id: 7788, name: 'Scott', job: 'Analyst', sal: 3000, deptno: 20},
            {id: 7839, name: 'King', job: 'President', sal: 5000, deptno: 10}
        ], 'id');
    };

    /**
     * The view model for the tables page.
     */
    var viewModel = {
        router: undefined,

        handleActivated: function (params) {
            var parentRouter;

            if (this.router) {
                return;
            }

            // The parentRouter is coming from parameter of the module.
            parentRouter = params.valueAccessor().params.ojRouter.parentRouter;
            this.router = parentRouter.getChildRouter('tables');

            // The RouterState value property is used to hold the table data
            this.router.states.forEach(function (state) {
                if (state.id === 'dept') {
                    state.value = DeptDataTable;
                } else if (state.id === 'emp') {
                    state.value = EmpDataTable;
                }
            });

            // The observable used to display the current table.
            this.table = this.router.currentValue;

            // Synchronise the child router it with the URL
            return oj.Router.sync();
        }
    };

    createDataTables();

    return viewModel;
});



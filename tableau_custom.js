
(function () {
    $(function () {
        var toggle;
        return toggle = new Toggle('.toggle');
    });

    this.Toggle = (function () {
        Toggle.prototype.el = null;

        Toggle.prototype.tabs = null;

        Toggle.prototype.panels = null;

        function Toggle(toggleClass) {
            this.el = $(toggleClass);
            this.tabs = this.el.find(".tab");
            this.panels = this.el.find(".panel");
            this.bind();
        }

        Toggle.prototype.show = function (index) {
            var activePanel, activeTab;
            this.tabs.removeClass('active');
            activeTab = this.tabs.get(index);
            $(activeTab).addClass('active');
            this.panels.hide();
            activePanel = this.panels.get(index);
            console.log(index)
            if (index == 0) initViz()
            if (index == 1) initViz_Two()
            return $(activePanel).show();
        };

        Toggle.prototype.bind = function () {
            var _this = this;
            return this.tabs.unbind('click').bind('click', function (e) {
                return _this.show($(e.currentTarget).index());
            });
        };

        return Toggle;

    })();

}).call(this);

var viz;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/SalesDashboardbyGames_html_16314496954930/InitialDashboard",
        // url = "https://public.tableau.com/views/SalesDashboardbyGames_html_16314496954930/Initial",
        options = {
            hideTabs: true
        };

    viz = new tableau.Viz(containerDiv, url, options);


    // Create a viz object and embed it in the container div.

}
function initViz_Two() {
    var containerDivTwo = document.getElementById("vizContainertwo"),
        url2 = "https://public.tableau.com/views/SalesDashboardbyGames_html_16314496954930/SalesvsShippedProducts",
        options2 = {

            hideTabs: true
        };

    viz = new tableau.Viz(containerDivTwo, url2, options2);

    // Create a viz object and embed it in the container div.

}


function GenreFilter(genre) {
    var sheet = viz.getWorkbook().getActiveSheet();
    if (genre === "") {
        sheet.clearFilterAsync("Genre");
    } else {
        sheet.applyFilterAsync("Genre", genre, tableau.FilterUpdateType.REPLACE);
    }
}

function MetricFilter(metric){
    var sheet = viz.getWorkbook().getActiveSheet();
    if (metric === "") {
        sheet.clearFilterAsync("Metric");
    } else {
        sheet.applyFilterAsync("Metric", metric, tableau.FilterUpdateType.REPLACE);
    }
}



// Opens the Download to PDF dialog box
function exportToPDF() {
    viz.showExportPDFDialog();
}

// Opens the Download Crosstab dialog box
function exportToCSV() {
    viz.showExportCrossTabDialog();
}

// Downloads the crosstab data in an Excel file
function exportToExcel() {
    viz.exportCrossTabToExcel();
}

// Opens the Download Image dialog box
function exportImage() {
    viz.showExportImageDialog();
}

// Opens the Download PowerPoint dialog box
function exportPowerPoint() {
    viz.showExportPowerPointDialog();
}
// Opens the Download dialog box
function showDownloadDialog() {
    viz.showDownloadDialog();
}
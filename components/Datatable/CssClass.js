export const css = {
    table: {
      tableHeaderClass: 'mb-0',
      tableBodyClass: 'mb-0',
      tableClass: 'table table-striped table-hover table-responsive-md',
      loadingClass: 'loading',
      ascendingIcon: 'chevron-up',
      descendingIcon: 'cheron-down',
      ascendingClass: 'sorted-asc',
      descendingClass: 'sorted-desc',
      sortableIcon: 'sort',
      detailRowClass: 'vuetable-detail-row',
      handleIcon: 'fa fa-bars text-secondary',
      renderIcon(classes, options){
        return `<fa icon="${classes.join(' ')}"`
      },
    },
    pagination: {
      infoClass: "pull-left",
      wrapperClass: "vuetable-pagination d-flex flex-row justify-content-center",
      activeClass: "btn-primary text-white",
      disabledClass: "disabled",
      pageClass: "btn btn-border",
      linkClass: "btn btn-border",
      icons: {
        first: "angle-double-left",
        prev: "angle-left",
        next: "angle-right",
        last: "angle-double-right"
      },
      renderIcon(classes, options){
        return `<fa icon="${classes.join(' ')}"`
      },
    }
  };

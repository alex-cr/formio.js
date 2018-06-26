export default {
  form: `
<div class="ui grid stackable">
    {% component.columns.forEach(function(column, index) { %}
    <div class="{{transform('columns', column.width)}} wide column" ref="column-{{id}}">
      {{columnComponents[index]}}
    </div>
    {% }) %}
</div>
`,
};
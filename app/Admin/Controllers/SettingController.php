<?php


namespace App\Admin\Controllers;

use Encore\Admin\Config\ConfigController as ConfigController;
use Encore\Admin\Config\ConfigModel;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class SettingController extends ConfigController
{
    use HasResourceActions;

    /**
     * 配置列表
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        return $content
            ->header('站点配置')
            ->body($this->grid());
    }

    /**
     * 编辑配置项
     *
     * @param int $id
     * @param Content $content
     *
     * @return Content
     */
    public function edit($id, Content $content)
    {
        return $content
            ->header('编辑配置')
            ->body($this->form()->edit($id));
    }

    /**
     * 添加配置项
     *
     * @param Content $content
     *
     * @return Content
     */
    public function create(Content $content)
    {
        return $content
            ->header('添加配置')
            ->body($this->form());
    }

    /**
     * 查看配置项
     *
     * @param $id
     * @param Content $content
     * @return Content
     */
    public function show($id, Content $content)
    {
        return $content
            ->header('查看配置')
            ->body(Admin::show(ConfigModel::findOrFail($id), function (Show $show) {
                $show->id();
                $show->name();
                $show->value();
                $show->description();
                $show->created_at();
                $show->updated_at();
            }));
    }

    /**
     * 数据列表
     *
     * @return Grid
     */
    public function grid()
    {
        $grid = new Grid(new ConfigModel());

        $grid->id('ID')->sortable();
        $grid->name()->display(function ($name) {
            return "<a tabindex=\"0\" class=\"btn btn-xs btn-twitter\" role=\"button\" data-toggle=\"popover\" data-html=true title=\"Usage\" data-content=\"<code>config('$name');</code>\">$name</a>";
        });
        $grid->value();
        $grid->description('描述');

        $grid->created_at('创建时间');
        $grid->updated_at('更新时间');

        $grid->filter(function ($filter) {
            $filter->disableIdFilter();
            $filter->like('name');
            $filter->like('value');
        });

        $grid->disableExport();

        return $grid;
    }

    /**
     * 数据表单
     *
     * @return Form
     */
    public function form()
    {
        $form = new Form(new ConfigModel());

        $form->display('id', 'ID');
        $form->text('name')->rules('required');
        $form->textarea('value')->rules('required');
        $form->textarea('description', '描述');

        return $form;
    }
}
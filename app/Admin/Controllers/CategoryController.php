<?php

namespace App\Admin\Controllers;

use App\Category;
use App\Http\Controllers\Controller;
use Encore\Admin\Form;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use Encore\Admin\Controllers\ModelForm;

class CategoryController extends Controller
{
    use ModelForm;

    /**
     * 以模型树的形式展示所有分类
     *
     * @return Content
     */
    public function index()
    {
        return Admin::content(function (Content $content) {
            $content->header('分类管理');
            $content->body(Category::tree(function ($tree) {
                $tree->nestable(['maxDepth' => 2]);
                $tree->branch(function ($branch) {
                    $icon = '<i class="fa fa-fw ' . $branch['icon'] . '"></i>';
                    return "$icon {$branch['title']} ";
                });
            }));
        });
    }

    /**
     * 编辑网站分类
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function edit($id, Content $content)
    {
        return $content
            ->header('Edit')
            ->description('description')
            ->body($this->form()->edit($id));
    }

    /**
     * 添加网站分类
     *
     * @param Content $content
     * @return Content
     */
    public function create(Content $content)
    {
        return $content
            ->header('新增分类')
            ->body($this->form());
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Category);

        $form->select('parent_id', '父级')
            ->options(Category::selectOptions())
            ->rules('required');
        $form->text('title', '标题')
            ->rules('required|max:50')
            ->placeholder('不得超过50个字符');
        $form->icon('icon', '图标')
            ->default('fa-code')
            ->rules('required|max:20');

        $form->tools(function (Form\Tools $tools) {
            $tools->disableDelete();
            $tools->disableView();
        });

        $form->footer(function ($footer) {
            $footer->disableViewCheck();
            $footer->disableEditingCheck();
            $footer->disableCreatingCheck();
        });
        return $form;
    }
}

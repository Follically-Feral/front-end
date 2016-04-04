import {Injectable}         from 'angular2/core';

import {QuestionBase}       from "../directives/dynamic-form/models/question-base";
import {DropdownQuestion}   from "../directives/dynamic-form/models/question-dropdown";
import {TextboxQuestion}    from "../directives/dynamic-form/models/question-textbox";
import {User}               from "../models/user";
import {FormButtonInterface} from "../directives/form-buttons/form-button.interface";
import {Group}              from "../models/group";

@Injectable()
export class FormDataService {

    // Todo: get from a remote source of question metadata
    getUserDetailData(user: User) {

        return Promise.resolve(user).then(user => {
            let questionData:QuestionBase<any>[] = [
                new TextboxQuestion({
                    key:'username',
                    label:'Username',
                    value:user.username,
                    required: false,
                    order: 1,
                    read_only: true,
                    type: 'text'
                }),
                new TextboxQuestion({
                    key:'email',
                    label:'Email',
                    value:user.email,
                    required: true,
                    order: 2,
                    type: 'text'
                }),
                new TextboxQuestion({
                    key:'forename',
                    label:'Forename',
                    value:user.forename,
                    required: true,
                    order: 3,
                    type: 'text'
                }),
                new TextboxQuestion({
                    key:'surname',
                    label:'Surname',
                    value:user.surname,
                    required: true,
                    order: 4,
                    type: 'text'
                }),
                new DropdownQuestion({
                    key:'role',
                    label: 'Role',
                    required: true,
                    options: [
                        {key:'User',  value:'User', selected:(user.role === 'User')?true:false},
                        {key:'Developer',  value:'Developer', selected:(user.role === 'Developer')?true:false},
                        {key:'Administrator',   value:'Administrator', selected:(user.role === 'Administrator')?true:false}
                    ],
                    order: 5
                })
            ];

            return questionData.sort((a,b) => a.order - b.order);
        });

    }

    // Todo: get from a remote source of question metadata
    getGroupDetailData(group: Group) {

        return Promise.resolve(group).then(group => {
            let questionData:QuestionBase<any>[] = [
                new TextboxQuestion({
                    key:'name',
                    label:'Name',
                    value:group.name,
                    required: true,
                    order: 1,
                    type: 'text'
                }),
                new TextboxQuestion({
                    key:'description',
                    label:'Description',
                    value:group.description,
                    required: false,
                    order: 2,
                    type: 'text'
                })
            ];

            return questionData.sort((a,b) => a.order - b.order);
        });

    }

    getGroupAddUserData() {

        return Promise.resolve().then(() => {
            let questionData:QuestionBase<any>[] = [
                new TextboxQuestion({
                    key:'user',
                    label:'Choose User',
                    value:'',
                    required: true,
                    order: 1,
                    type: 'text',
                    search_box: true
                }),
                new TextboxQuestion({
                    key:'selectedSearchValue',
                    label:'selectedSearchValue',
                    value:'',
                    order: 2,
                    type: 'hidden'
                }),
            ];

            return questionData.sort((a,b) => a.order - b.order);
        });

    }

    getDefaultButtons() {

        return Promise.resolve().then(() => {
            return [
                <FormButtonInterface>{
                    type: 'save',
                    disabled: true,
                    modalHeader: 'Are you sure!',
                    modalContent: 'Are you sure you want to save these changes?',
                    buttonText: 'Save Changes',
                    show: true,
                },
                <FormButtonInterface>{
                    type: 'cancel',
                    disabled: false,
                    modalHeader: 'Go back!',
                    modalContent: 'Are you sure you want to go back?',
                    buttonText: 'Cancel',
                    show: true,
                },
                <FormButtonInterface>{
                    type: 'delete',
                    disabled: false,
                    modalHeader: 'Are you sure!',
                    modalContent: 'Are you sure you want to delete this record?',
                    buttonText: 'Delete',
                    show: true,
                }
            ];
        });

    }

}

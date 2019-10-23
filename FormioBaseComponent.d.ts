import { EventEmitter, OnInit, OnChanges, OnDestroy, ElementRef, NgZone } from '@angular/core';
import { FormioService } from './formio.service';
import { FormioLoader } from './components/loader/formio.loader';
import { FormioAlerts } from './components/alerts/formio.alerts';
import { FormioAppConfig } from './formio.config';
import { FormioForm, FormioOptions, FormioRefreshValue } from './formio.common';
import { CustomTagsService } from './custom-component/custom-tags.service';
export declare class FormioBaseComponent implements OnInit, OnChanges, OnDestroy {
    loader: FormioLoader;
    ngZone: NgZone;
    config: FormioAppConfig;
    customTags?: CustomTagsService;
    form?: FormioForm;
    submission?: any;
    src?: string;
    url?: string;
    service?: FormioService;
    options?: FormioOptions;
    formioOptions?: any;
    renderOptions?: any;
    readOnly?: boolean;
    viewOnly?: boolean;
    hideComponents?: string[];
    refresh?: EventEmitter<FormioRefreshValue>;
    error?: EventEmitter<any>;
    success?: EventEmitter<object>;
    language?: EventEmitter<string>;
    hooks?: any;
    renderer?: any;
    render: EventEmitter<object>;
    customEvent: EventEmitter<object>;
    submit: EventEmitter<object>;
    prevPage: EventEmitter<object>;
    nextPage: EventEmitter<object>;
    beforeSubmit: EventEmitter<object>;
    change: EventEmitter<object>;
    invalid: EventEmitter<boolean>;
    errorChange: EventEmitter<any>;
    formLoad: EventEmitter<any>;
    submissionLoad: EventEmitter<any>;
    ready: EventEmitter<FormioBaseComponent>;
    formioElement?: ElementRef<any>;
    formio: any;
    initialized: boolean;
    alerts: FormioAlerts;
    private formioReady;
    private formioReadyResolve;
    private submitting;
    constructor(loader: FormioLoader, ngZone: NgZone, config: FormioAppConfig, customTags?: CustomTagsService);
    getRenderer(): any;
    getRendererOptions(): any;
    createRenderer(): any;
    setForm(form: FormioForm): any;
    initialize(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onRefresh(refresh: FormioRefreshValue): void;
    ngOnChanges(changes: any): void;
    onPrevPage(data: any): void;
    onNextPage(data: any): void;
    onSubmit(submission: any, saved: boolean, noemit?: boolean): void;
    onError(err: any): void;
    submitExecute(submission: object): void;
    submitForm(submission: any): void;
}

export default class ModuleConfig {
  route: string = "";
  role: "*" | string = "*";
}

export class ModuleController {
  route: string = "";
  name: string = "";
  label: string = "default.module.label";
  icon: string = "";

  constructor() {}
  //Extended properties

  //Actions
  getEntries() {
    return new Promise((resolve, reject) => {
      return reject(false);
    });
  }
  getEntry(id: string) {
    return new Promise((resolve, reject) => {
      return reject(false);
    });
  }
  createEntry(payload: Object) {
    return new Promise((resolve, reject) => {
      return reject(false);
    });
  }

  //Forms
  get listColumns(): Array<{
    /**
     * Object display property
     * */
    prop: string;
    /**
     * Column name
     * */
    label: string;
    /**
     * Determite if column clickable
     * */
    primary?: boolean;
    /**
     * Link which row will be moved
     * */
    to?: string;
  }> {
    return [];
  }

  get createForm(): Array<{
    key: string;
    tab: string;
    sections: Array<{
      key: string;
      label: string;
      rows: Array<
        Array<{
          id: string;
          label: string;
          placeholder: string;
        }>
      >;
    }>;
  }> {
    return [];
  }

  get viewForm(): Array<{
    key: string;
    tab: string;
    sections: Array<{
      key: string;
      label: string;
      rows: Array<
        Array<{
          id: string;
          label: string;
          placeholder: string;
          property: string;
        }>
      >;
    }>;
  }> {
    return [];
  }
}

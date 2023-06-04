import { Identifiable, Project, createCard, createRow } from "./project";

export default (state: Project, action: any) => {
    switch(action.type) {
        case "PROJECT_NAME":
            return 
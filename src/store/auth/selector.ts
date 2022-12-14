import { createSelector } from "reselect";
import { ApplicationState } from '@/store/index';

export const getDisclosure = createSelector(
    (state: ApplicationState) => state.auth.user,
    (user) => user?.disclosure_agreements?.disclosure_pdf_link
);

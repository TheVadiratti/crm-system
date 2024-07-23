import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { type DesignerDto } from '../../../services/types.dto';
import DesignerCard from '../../Card/DesignerCard';
import PageSection from '../index';
import mapFromDtoToDisplayData from './mappers/fromDtoToDisplayData';

interface Props {
  designers: DesignerDto[];
}

const MAX_LIST_LENGTH = 10;

export default function TopDesignersSection({ designers }: Props) {
  const { t: localize } = useTranslation();

  const displayData = useMemo(
    () => mapFromDtoToDisplayData(designers).slice(0, MAX_LIST_LENGTH),
    [designers]
  );

  return (
    <PageSection heading={localize('sectionHeadings.topDesigners')}>
      {displayData.map((designer, index) => (
        <DesignerCard
          username={designer.username}
          avatarSrc={designer.avatar}
          avatarAlt={designer.username}
          issueMedianTime={designer.issueMedianTime}
          doneIssuesCount={designer.doneIssuesCount}
          ratingPosition={index + 1}
          key={designer.email}
        />
      ))}
    </PageSection>
  );
}

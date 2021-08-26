/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      targetDate
      preparedBy
      reviewedBy
      reviewerComments
      createdAt
      changeDesc
      timeLimitsDesc
      publishingLimitsDesc
      scaleProjected
      appName
      appId
      appSize
      status
      revBrief
      revLob
      revCatalogs
      revQvfiles
      revExtensions
      revComponents
      revPlatforms
      revApprovals
      stdOverall
      stdDatamodel
      stdInterface
      stdThreshold
      flaggedOverall
      flaggedDatasource
      flaggedDatamodel
      flaggedInterface
      flaggedDesign
      flaggedScript
      lobs {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      briefs {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      catalogs {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      qvfFiles {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      extensions {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      components {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      platforms {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      intakeApprovals {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      overall {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      datasources {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      datamodels {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      interfaces {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      designs {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      scripts {
        items {
          id
          label
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApproval = /* GraphQL */ `
  query GetApproval($id: ID!) {
    getApproval(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listApprovals = /* GraphQL */ `
  query ListApprovals(
    $filter: ModelApprovalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApprovals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComponent = /* GraphQL */ `
  query GetComponent($id: ID!) {
    getComponent(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComponents = /* GraphQL */ `
  query ListComponents(
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExtension = /* GraphQL */ `
  query GetExtension($id: ID!) {
    getExtension(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listExtensions = /* GraphQL */ `
  query ListExtensions(
    $filter: ModelExtensionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExtensions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQVF = /* GraphQL */ `
  query GetQVF($id: ID!) {
    getQVF(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listQVFs = /* GraphQL */ `
  query ListQVFs(
    $filter: ModelQVFFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQVFs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLob = /* GraphQL */ `
  query GetLob($id: ID!) {
    getLob(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLobs = /* GraphQL */ `
  query ListLobs(
    $filter: ModelLobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrief = /* GraphQL */ `
  query GetBrief($id: ID!) {
    getBrief(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBriefs = /* GraphQL */ `
  query ListBriefs(
    $filter: ModelBriefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBriefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCatalog = /* GraphQL */ `
  query GetCatalog($id: ID!) {
    getCatalog(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCatalogs = /* GraphQL */ `
  query ListCatalogs(
    $filter: ModelCatalogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCatalogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOverall = /* GraphQL */ `
  query GetOverall($id: ID!) {
    getOverall(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOveralls = /* GraphQL */ `
  query ListOveralls(
    $filter: ModelOverallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOveralls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDataSource = /* GraphQL */ `
  query GetDataSource($id: ID!) {
    getDataSource(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDataSources = /* GraphQL */ `
  query ListDataSources(
    $filter: ModelDataSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDataModel = /* GraphQL */ `
  query GetDataModel($id: ID!) {
    getDataModel(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDataModels = /* GraphQL */ `
  query ListDataModels(
    $filter: ModelDataModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserInterface = /* GraphQL */ `
  query GetUserInterface($id: ID!) {
    getUserInterface(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserInterfaces = /* GraphQL */ `
  query ListUserInterfaces(
    $filter: ModelUserInterfaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInterfaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAppDesign = /* GraphQL */ `
  query GetAppDesign($id: ID!) {
    getAppDesign(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAppDesigns = /* GraphQL */ `
  query ListAppDesigns(
    $filter: ModelAppDesignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppDesigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getScript = /* GraphQL */ `
  query GetScript($id: ID!) {
    getScript(id: $id) {
      id
      label
      value
      review {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listScripts = /* GraphQL */ `
  query ListScripts(
    $filter: ModelScriptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScripts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        review {
          id
          targetDate
          preparedBy
          reviewedBy
          reviewerComments
          createdAt
          changeDesc
          timeLimitsDesc
          publishingLimitsDesc
          scaleProjected
          appName
          appId
          appSize
          status
          revBrief
          revLob
          revCatalogs
          revQvfiles
          revExtensions
          revComponents
          revPlatforms
          revApprovals
          stdOverall
          stdDatamodel
          stdInterface
          stdThreshold
          flaggedOverall
          flaggedDatasource
          flaggedDatamodel
          flaggedInterface
          flaggedDesign
          flaggedScript
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchReviews = /* GraphQL */ `
  query SearchReviews(
    $filter: SearchableReviewFilterInput
    $sort: SearchableReviewSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchReviews(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        targetDate
        preparedBy
        reviewedBy
        reviewerComments
        createdAt
        changeDesc
        timeLimitsDesc
        publishingLimitsDesc
        scaleProjected
        appName
        appId
        appSize
        status
        revBrief
        revLob
        revCatalogs
        revQvfiles
        revExtensions
        revComponents
        revPlatforms
        revApprovals
        stdOverall
        stdDatamodel
        stdInterface
        stdThreshold
        flaggedOverall
        flaggedDatasource
        flaggedDatamodel
        flaggedInterface
        flaggedDesign
        flaggedScript
        lobs {
          nextToken
        }
        briefs {
          nextToken
        }
        catalogs {
          nextToken
        }
        qvfFiles {
          nextToken
        }
        extensions {
          nextToken
        }
        components {
          nextToken
        }
        platforms {
          nextToken
        }
        intakeApprovals {
          nextToken
        }
        overall {
          nextToken
        }
        datasources {
          nextToken
        }
        datamodels {
          nextToken
        }
        interfaces {
          nextToken
        }
        designs {
          nextToken
        }
        scripts {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      nextToken
      total
    }
  }
`;

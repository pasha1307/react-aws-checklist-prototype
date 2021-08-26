/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createApproval = /* GraphQL */ `
  mutation CreateApproval(
    $input: CreateApprovalInput!
    $condition: ModelApprovalConditionInput
  ) {
    createApproval(input: $input, condition: $condition) {
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
export const updateApproval = /* GraphQL */ `
  mutation UpdateApproval(
    $input: UpdateApprovalInput!
    $condition: ModelApprovalConditionInput
  ) {
    updateApproval(input: $input, condition: $condition) {
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
export const deleteApproval = /* GraphQL */ `
  mutation DeleteApproval(
    $input: DeleteApprovalInput!
    $condition: ModelApprovalConditionInput
  ) {
    deleteApproval(input: $input, condition: $condition) {
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
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
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
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
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
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
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
export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $input: CreateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    createComponent(input: $input, condition: $condition) {
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
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $input: UpdateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    updateComponent(input: $input, condition: $condition) {
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
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $input: DeleteComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    deleteComponent(input: $input, condition: $condition) {
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
export const createExtension = /* GraphQL */ `
  mutation CreateExtension(
    $input: CreateExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    createExtension(input: $input, condition: $condition) {
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
export const updateExtension = /* GraphQL */ `
  mutation UpdateExtension(
    $input: UpdateExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    updateExtension(input: $input, condition: $condition) {
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
export const deleteExtension = /* GraphQL */ `
  mutation DeleteExtension(
    $input: DeleteExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    deleteExtension(input: $input, condition: $condition) {
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
export const createQVF = /* GraphQL */ `
  mutation CreateQVF(
    $input: CreateQVFInput!
    $condition: ModelQVFConditionInput
  ) {
    createQVF(input: $input, condition: $condition) {
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
export const updateQVF = /* GraphQL */ `
  mutation UpdateQVF(
    $input: UpdateQVFInput!
    $condition: ModelQVFConditionInput
  ) {
    updateQVF(input: $input, condition: $condition) {
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
export const deleteQVF = /* GraphQL */ `
  mutation DeleteQVF(
    $input: DeleteQVFInput!
    $condition: ModelQVFConditionInput
  ) {
    deleteQVF(input: $input, condition: $condition) {
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
export const createLob = /* GraphQL */ `
  mutation CreateLob(
    $input: CreateLobInput!
    $condition: ModelLobConditionInput
  ) {
    createLob(input: $input, condition: $condition) {
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
export const updateLob = /* GraphQL */ `
  mutation UpdateLob(
    $input: UpdateLobInput!
    $condition: ModelLobConditionInput
  ) {
    updateLob(input: $input, condition: $condition) {
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
export const deleteLob = /* GraphQL */ `
  mutation DeleteLob(
    $input: DeleteLobInput!
    $condition: ModelLobConditionInput
  ) {
    deleteLob(input: $input, condition: $condition) {
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
export const createBrief = /* GraphQL */ `
  mutation CreateBrief(
    $input: CreateBriefInput!
    $condition: ModelBriefConditionInput
  ) {
    createBrief(input: $input, condition: $condition) {
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
export const updateBrief = /* GraphQL */ `
  mutation UpdateBrief(
    $input: UpdateBriefInput!
    $condition: ModelBriefConditionInput
  ) {
    updateBrief(input: $input, condition: $condition) {
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
export const deleteBrief = /* GraphQL */ `
  mutation DeleteBrief(
    $input: DeleteBriefInput!
    $condition: ModelBriefConditionInput
  ) {
    deleteBrief(input: $input, condition: $condition) {
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
export const createCatalog = /* GraphQL */ `
  mutation CreateCatalog(
    $input: CreateCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    createCatalog(input: $input, condition: $condition) {
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
export const updateCatalog = /* GraphQL */ `
  mutation UpdateCatalog(
    $input: UpdateCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    updateCatalog(input: $input, condition: $condition) {
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
export const deleteCatalog = /* GraphQL */ `
  mutation DeleteCatalog(
    $input: DeleteCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    deleteCatalog(input: $input, condition: $condition) {
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
export const createOverall = /* GraphQL */ `
  mutation CreateOverall(
    $input: CreateOverallInput!
    $condition: ModelOverallConditionInput
  ) {
    createOverall(input: $input, condition: $condition) {
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
export const updateOverall = /* GraphQL */ `
  mutation UpdateOverall(
    $input: UpdateOverallInput!
    $condition: ModelOverallConditionInput
  ) {
    updateOverall(input: $input, condition: $condition) {
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
export const deleteOverall = /* GraphQL */ `
  mutation DeleteOverall(
    $input: DeleteOverallInput!
    $condition: ModelOverallConditionInput
  ) {
    deleteOverall(input: $input, condition: $condition) {
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
export const createDataSource = /* GraphQL */ `
  mutation CreateDataSource(
    $input: CreateDataSourceInput!
    $condition: ModelDataSourceConditionInput
  ) {
    createDataSource(input: $input, condition: $condition) {
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
export const updateDataSource = /* GraphQL */ `
  mutation UpdateDataSource(
    $input: UpdateDataSourceInput!
    $condition: ModelDataSourceConditionInput
  ) {
    updateDataSource(input: $input, condition: $condition) {
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
export const deleteDataSource = /* GraphQL */ `
  mutation DeleteDataSource(
    $input: DeleteDataSourceInput!
    $condition: ModelDataSourceConditionInput
  ) {
    deleteDataSource(input: $input, condition: $condition) {
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
export const createDataModel = /* GraphQL */ `
  mutation CreateDataModel(
    $input: CreateDataModelInput!
    $condition: ModelDataModelConditionInput
  ) {
    createDataModel(input: $input, condition: $condition) {
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
export const updateDataModel = /* GraphQL */ `
  mutation UpdateDataModel(
    $input: UpdateDataModelInput!
    $condition: ModelDataModelConditionInput
  ) {
    updateDataModel(input: $input, condition: $condition) {
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
export const deleteDataModel = /* GraphQL */ `
  mutation DeleteDataModel(
    $input: DeleteDataModelInput!
    $condition: ModelDataModelConditionInput
  ) {
    deleteDataModel(input: $input, condition: $condition) {
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
export const createUserInterface = /* GraphQL */ `
  mutation CreateUserInterface(
    $input: CreateUserInterfaceInput!
    $condition: ModelUserInterfaceConditionInput
  ) {
    createUserInterface(input: $input, condition: $condition) {
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
export const updateUserInterface = /* GraphQL */ `
  mutation UpdateUserInterface(
    $input: UpdateUserInterfaceInput!
    $condition: ModelUserInterfaceConditionInput
  ) {
    updateUserInterface(input: $input, condition: $condition) {
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
export const deleteUserInterface = /* GraphQL */ `
  mutation DeleteUserInterface(
    $input: DeleteUserInterfaceInput!
    $condition: ModelUserInterfaceConditionInput
  ) {
    deleteUserInterface(input: $input, condition: $condition) {
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
export const createAppDesign = /* GraphQL */ `
  mutation CreateAppDesign(
    $input: CreateAppDesignInput!
    $condition: ModelAppDesignConditionInput
  ) {
    createAppDesign(input: $input, condition: $condition) {
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
export const updateAppDesign = /* GraphQL */ `
  mutation UpdateAppDesign(
    $input: UpdateAppDesignInput!
    $condition: ModelAppDesignConditionInput
  ) {
    updateAppDesign(input: $input, condition: $condition) {
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
export const deleteAppDesign = /* GraphQL */ `
  mutation DeleteAppDesign(
    $input: DeleteAppDesignInput!
    $condition: ModelAppDesignConditionInput
  ) {
    deleteAppDesign(input: $input, condition: $condition) {
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
export const createScript = /* GraphQL */ `
  mutation CreateScript(
    $input: CreateScriptInput!
    $condition: ModelScriptConditionInput
  ) {
    createScript(input: $input, condition: $condition) {
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
export const updateScript = /* GraphQL */ `
  mutation UpdateScript(
    $input: UpdateScriptInput!
    $condition: ModelScriptConditionInput
  ) {
    updateScript(input: $input, condition: $condition) {
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
export const deleteScript = /* GraphQL */ `
  mutation DeleteScript(
    $input: DeleteScriptInput!
    $condition: ModelScriptConditionInput
  ) {
    deleteScript(input: $input, condition: $condition) {
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

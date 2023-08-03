import StateCityStateModel from '../../../../models/state-city.model';

const stateLookup = async () => {
  return StateCityStateModel.find({}, { state_name: 1, state_id: 1 })
}

const cityLookup = async (data: any) => {
  return StateCityStateModel.findOne({ state_id: data.state_id }, { state_city: 1 })
}

export { stateLookup, cityLookup }

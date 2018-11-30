﻿using NBitcoin;

#if !CLIENT
namespace AzureIndexer.Api.Models
#else
namespace QBitNinja.Client.Models
#endif
{
    public class GetBlockResponse
    {
        public BlockInformation AdditionalInformation
        {
            get;
            set;
        }
		public ExtendedBlockInformation ExtendedInformation
		{
			get;
			set;
		}
		public Block Block
        {
            get;
            set;
        }
    }
}
